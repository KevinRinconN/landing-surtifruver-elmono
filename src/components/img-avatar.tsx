import { cn } from "@/lib/utils";
import React from "react";
import { IconWrapper } from "./icon/icon-wrapper";

interface ImgAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  img?: string | null;
}

export const ImgAvatar = React.forwardRef<HTMLDivElement, ImgAvatarProps>(
  ({ className, img, ...props }, ref) => {
    return (
      <figure
        className={cn(
          "w-24 h-24 rounded-full bg-muted overflow-hidden",
          className
        )}
        {...props}
      >
        {img ? (
          <img src={img} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <IconWrapper
              icon="buyCar"
              className="text-muted-foreground"
              size="sm"
            />
          </div>
        )}
      </figure>
    );
  }
);

IconWrapper.displayName = "ImgAvatar";
