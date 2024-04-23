import React from "react";
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

const AllCategories = ({ allCategories }) => {
  return (
    <div className="container mx-auto  mt-10 bg-[#F5F6FF] p-6">
        <h2 className="xl:mr-12 lg:ml-2 font-bold text-lg md:ml-20 md:text-start text-center">All Category</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:mx-0 mx-16">
        {allCategories.data.map((category) => (
          <Card className="hover:border-2 hover:border-[#0DA14B] mt-4 ">
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex aspect-square justify-center p-8 h-60 w-full">
              <Image src={category.icon} responsive width={300} height={10} />
            </CardContent>
            <CardFooter>
              <Link href={`/category/${category._id}`} className="w-full">
              <Button
                className="bg-[#0DA14B] text-white rounded-md w-full text-base font-normal hover:bg-[#F5F6FF] hover:text-black"
              >
                Buy Course
              </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
