import { forwardRef } from "react";
import { FormRangeProps } from "./types";
import { rangeStyles } from "./styles";

export const FormRange = forwardRef<HTMLInputElement, FormRangeProps>(
  ({ className, ...props }, ref) => (
    <input
      type="range"
      className={rangeStyles({ className })}
      ref={ref}
      {...props}
    />
  )
);

FormRange.displayName = "FormRange";
