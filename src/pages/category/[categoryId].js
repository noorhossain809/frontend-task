import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';
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
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CategoryCourse = ({courses, category}) => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
    console.log('category courses', category);
    return (
        <div className="container mx-auto mt-10">
      <div className=" ">
        <h1 className="text-center font-bold">
          ক্যাটেগরি নাম : {category.data.title}

        </h1>
      </div>
      {/* <div className="grid grid-cols-4 justify-center gap-4">
        {courses.data.data.map((course) => (
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
      </div> */}

      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-auto"
      >
        <CarouselContent >
          {courses.data.data.map((course, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
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
          {/* <CardDescription className="text-sm ml-4 text-left line-clamp-2 hover:line-clamp-none mt-2">{course.description}</CardDescription> */}
          <CardFooter className="mt-2">
            <Button
              variant="outline"
              className="bg-[#0DA14B] text-white text-base font-light block py-2 md:px-3 w-full rounded-md tracking-wide text-base font-normal"
            >
              Buy Course
            </Button>
          </CardFooter>
        </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    );
};

export default CategoryCourse;

CategoryCourse.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async (context) => {
  const { params } = context;

  const categoryRes = await fetch(`https://easy-learning-platform.vercel.app/api/v1/categories/${params.categoryId}`)
  const categoryData = await categoryRes.json()
  const res = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/courses?category_id=${params.categoryId}`
  );
  const data = await res.json();

  return {
    props: {
        category: categoryData,
      courses: data,
    },
  };
};