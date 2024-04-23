import React, { useState } from "react";
import RootLayout from "@/components/Layouts/RootLayout";
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
import { PaginationSection } from "@/components/ui/PaginationSection";


const SubcategoryDetails = ({ courses, subcategory }) => {
 
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Change this according to your preference

  // Calculate the index of the first and last items to display based on currentPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courses.data.data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mx-auto mt-10">
      <div className=" ">
        <h1 className="text-center font-bold">
          সাব-ক্যাটেগরি নাম : {subcategory.data.title}

        </h1>
      </div>
      <div className="flex justify-center gap-4">
        {currentItems.map((course) => (
          <Card className="w-[300px] hover:border-2 hover:border-[#0DA14B] mt-4">
          <CardContent className="flex aspect-square p-4 h-60 w-full">
            <Image
              src={course.banner}
              responsive
              width={300}
              height={10}
            />
          </CardContent>
          <h3 className="text-base ml-4 font-bold">{course.title}</h3>
          <h3 className="text-base ml-4 font-semibold">লেখক : {course.author}</h3>
          <CardDescription className="text-sm ml-4 text-left line-clamp-2 hover:line-clamp-none mt-2">{course.description}</CardDescription>
          <CardFooter className="mt-2">
            <Button
              variant="outline"
              className="bg-[#0DA14B] text-white text-base font-light block py-2 md:px-3 w-full rounded-md tracking-wide text-base font-normal"
            >
              Buy Course
            </Button>
          </CardFooter>
        </Card>
        ))}
      </div>
      <PaginationSection 
        itemsPerPage={itemsPerPage}
        totalItems={courses.data.data.length}
        paginate={paginate}
        currentPage={currentPage}  />
    </div>
  );
};

export default SubcategoryDetails;

SubcategoryDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const subcategoryRes = await fetch(`https://easy-learning-platform.vercel.app/api/v1/sub-categories/${params.subcategoryId}`)
  const subcategoryData = await subcategoryRes.json()
  const res = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/courses?sub_category_id=${params.subcategoryId}`
  );
  const data = await res.json();

  return {
    props: {
      subcategory: subcategoryData,
      courses: data,
    },
  };
};
