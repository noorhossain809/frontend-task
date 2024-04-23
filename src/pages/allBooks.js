import RootLayout from '@/components/Layouts/RootLayout';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PaginationSection } from '@/components/ui/PaginationSection';
import axios from 'axios';

const AllBooks = ({books}) => {
     const [currentPage, setCurrentPage] = useState(1);
     const [itemsPerPage, setItemsPerPage] = useState(3);  // Change this according to your preference

  // Calculate the index of the first and last items to display based on currentPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = books.data.data.slice(indexOfFirstItem, indexOfLastItem);

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Show 1 item per page on mobile devices
      } else {
        setItemsPerPage(3); // Show 3 items per page on larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="container mx-auto mt-10 ">
        <h2 className="ml-40 font-bold text-lg">All Books</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {currentItems.map((book) => (
          <Card className="hover:border-2 hover:border-[#0DA14B] mt-4">
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex aspect-square p-8 h-60 w-full">
              <Image src={book.cover_page} responsive width={300} height={10} />
            </CardContent>
            <CardFooter className="">
              <Link href={`/category/${book._id}`}>
              <Button
                variant="outline"
                className="bg-[#0DA14B] text-white block py-2 md:px-24 rounded-md tracking-wide text-base font-normal"
              >
                Buy Course
              </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className='container mx-auto'>
        <PaginationSection 
        itemsPerPage={itemsPerPage}
        totalItems={books.data.data.length}
        paginate={paginate}
        currentPage={currentPage}  />
      </div>
    </div>
    );
};

export default AllBooks;

AllBooks.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async() => {
    try {
      const res = await axios.get('https://easy-learning-platform.vercel.app/api/v1/books')
    const data = await res.data
    return {
        props: {
            books : data
        }
    }
    } catch (error) {
      return {
      props: {
        books: null // Return null for books if there's an error
      }
    };
    }

    
}