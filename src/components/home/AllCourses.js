"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button"

const AllCourses = ({ allCourses }) => {
  console.log(allCourses);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="container mx-auto mt-10">
      <h2 className="mr-12 font-bold text-lg lg:mx-8 xl:mx-2 mx-16">All Courses</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-auto lg:mx-6 xl:mx-0 mx-16"
      >
        <CarouselContent >
          {allCourses.data.data.map((course, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card className="">
                    <CardHeader>
                      <CardTitle className="text-base">{course.title}</CardTitle>
                    </CardHeader>
                  <CardContent className="flex aspect-square p-4 h-60 w-full">
                    <Image src={course.banner} alt="course banner" responsive width={500} height={10} />
                  </CardContent>
                  <CardFooter className="mt-2">
                   <Button variant="outline"  className="bg-[#0DA14B] text-white  block py-2 w-full rounded-md tracking-wide text-base font-normal">Preview</Button>
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

export default AllCourses;
