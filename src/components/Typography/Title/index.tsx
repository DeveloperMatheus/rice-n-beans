import { forwardRef } from "react";
import { titleStyles } from "./styles";
import { TitleProps } from "./types";

export const Title = forwardRef<HTMLDivElement, TitleProps>(
  ({ children, className, ...props }, ref) => (
    <h1 className={titleStyles({ className })} ref={ref} {...props}>
      {children}
    </h1>
  )
);

Title.displayName = "Title";
