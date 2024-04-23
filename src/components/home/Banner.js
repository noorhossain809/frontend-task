"use client"
import {useRef} from 'react'
import Autoplay from "embla-carousel-autoplay"
import img from "../../assets/banner_image_15.jpg"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const Banner = () => {
    const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
    return (
        <div className="flex justify-center mt-6">
      <Carousel
      plugins={[plugin.current]}
      className="w-auto max-w-7xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
             <Image src={img} alt=""  />
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

export default Banner;