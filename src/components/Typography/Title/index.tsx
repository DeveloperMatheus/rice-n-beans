import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { titleStyles } from "./styles";
import { TitleProps } from "./types";

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, className, ...props }, ref) => (
    <h1 className={twMerge(titleStyles({ className }))} ref={ref} {...props}>
      {children}
    </h1>
  )
);

Title.displayName = "Title";
