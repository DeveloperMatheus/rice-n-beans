import { forwardRef } from "react";
import { FormRangeProps } from "./types";
import { rangeStyles } from "./styles";
import styles from "./form-range.module.css";

export const FormRange = forwardRef<HTMLInputElement, FormRangeProps>(
  ({ className, ...props }, ref) => (
    <input
      type="range"
      className={`${styles.range} ${rangeStyles({ className })}`}
      ref={ref}
      {...props}
    />
  )
);

FormRange.displayName = "FormRange";
