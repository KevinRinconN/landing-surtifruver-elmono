import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



const colors = {
  Amarillo: "bg-[#f5eab3] text-[#957c00]",
  Rojo: "bg-[#ffa6a6] text-[#ab5a5a]",
  Verde : "bg-[#d4e8ce] text-[#1c3b00]"
};

export function PriceCarusel({imgs}: {imgs?: string[]}) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {imgs && imgs.map((img, index) => (
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
