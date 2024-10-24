import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const imgs = [
    "/assets/img/hero1.png",
    "/assets/img/hero2.png",
    "/assets/img/poster3.png",
    "/assets/img/poster4.png",
    "/assets/img/poster5.png",
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem className="" key={index}>
            <div className="h-96 rounded-lg overflow-hidden">
              <img src={img} alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
