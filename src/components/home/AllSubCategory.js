import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const AllSubCategory = ({ allSubCategories }) => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="xl:mr-12 lg:ml-2 font-bold text-lg md:ml-20 md:text-start text-center">All Subcategory</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:mx-0 mx-16">
        {allSubCategories.data.data.map((subcategory) => (
          <Card className="hover:border-2 hover:border-[#0DA14B] mt-4">
            <CardHeader className="border">
              <CardTitle>{subcategory.title}</CardTitle>
            </CardHeader>
            <h3 className="p-6">{subcategory.category_id.title}</h3>
            <CardContent className="flex aspect-square p-8 h-60 w-full">
              <Image
                src={subcategory.category_id.icon}
                responsive
                width={300}
                height={10}
              />
            </CardContent>
            <CardFooter className="">
              <Link href={`/subcategory/${subcategory._id}`} className="w-full">
                <Button
                  variant="outline"
                  className="bg-[#0DA14B] text-white block py-2 w-full rounded-md tracking-wide text-base font-normal"
                >
                  Preview
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllSubCategory;
