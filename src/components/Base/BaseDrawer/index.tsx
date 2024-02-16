import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { baseDrawerStyles } from "./styles";
import { BaseDrawerProps } from "./types";

export const BaseDrawer = forwardRef<HTMLDivElement, BaseDrawerProps>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(baseDrawerStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

BaseDrawer.displayName = "BaseDrawer";
