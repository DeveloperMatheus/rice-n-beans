import { forwardRef } from "react";
import { checkboxStyles } from "./styles";
import { CheckboxProps } from "./types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      className={checkboxStyles({ className })}
      ref={ref}
      {...props}
    />
  )
);

Checkbox.displayName = "Checkbox";
