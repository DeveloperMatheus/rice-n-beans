import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { baseStyles } from "./styles";
import { BaseProps } from "./types";

export const Base = forwardRef<HTMLDivElement, BaseProps>(
  ({ children, className, ...props }, ref) => (
    <div className={twMerge(baseStyles({ className }))} ref={ref} {...props}>
      {children}
    </div>
  )
);

Base.displayName = "Base";
