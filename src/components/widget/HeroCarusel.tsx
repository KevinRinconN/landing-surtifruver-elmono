import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo({imgs}: {imgs?: string[]}) {

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {imgs && imgs.map((img, index) => (
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
