import { forwardRef } from "react";
import { RangeProps } from "./types";
import { rangeStyles } from "./styles";

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ className, ...props }, ref) => (
    <input
      type="range"
      className={rangeStyles({ className })}
      ref={ref}
      {...props}
    />
  )
);

Range.displayName = "Range";
