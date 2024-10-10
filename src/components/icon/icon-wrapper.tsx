import React from "react";
import { Icons } from "./icons";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva("", {
  variants: {
    size: {
      sm: "w-4 h-4",
      lg: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface IconWrapperProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, "strokeWidth">,
    VariantProps<typeof iconVariants> {
  icon: Icons;
  strokeWidth?: "regular" | "bold";
}

export const IconWrapper = React.forwardRef<SVGSVGElement, IconWrapperProps>(
  ({ icon, size, strokeWidth, className, ...props }, ref) => {
    const Icon = Icons[icon || "arrowRight"];
    return (
      <Icon
        className={cn(iconVariants({ size, className }))}
        strokeWidth={strokeWidth == "bold" ? 2 : 1.5}
        {...props}
      />
    );
  }
);

IconWrapper.displayName = "IconWrapper";
