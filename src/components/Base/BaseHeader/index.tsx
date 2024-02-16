import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { baseHeaderStyles } from "./styles";
import { BaseHeaderProps } from "./types";

export const BaseHeader = forwardRef<HTMLDivElement, BaseHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(baseHeaderStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

BaseHeader.displayName = "BaseHeader";
