import { forwardRef } from "react";
import { RangeProps } from "./types";
import { rangeStyles } from "./styles";
import { twMerge } from "tailwind-merge";

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ className, ...props }, ref) => (
    <input
      type="range"
      className={twMerge(rangeStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Range.displayName = "Range";
