import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { BaseContainerProps } from "./types";
import { baseContainerStyles } from "./styles";

export const BaseContainer = forwardRef<HTMLDivElement, BaseContainerProps>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(baseContainerStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

BaseContainer.displayName = "BaseContainer";
