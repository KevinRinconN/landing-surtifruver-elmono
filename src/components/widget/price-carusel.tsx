import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PriceCarusel() {
  const imgs = [
    "/assets/img/poster1.png",
    "/assets/img/poster2.png",
    "/assets/img/poster3.png",
    "/assets/img/poster4.png",
    "/assets/img/poster5.png",
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem className="basis-1/3" key={index}>
            <div className="p-1">
              <div className="bg-muted rounded-md h-96">
                <img src={img} alt="" />
                
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-full left-0 rounded-none bg-background/50 border-none text-primary" />
      <CarouselNext className="h-full right-0 rounded-none bg-background/50 border-none text-primary" />
    </Carousel>
  );
}
