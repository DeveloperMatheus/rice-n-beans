import { forwardRef } from "react";
import { checkboxStyles } from "./styles";
import { CheckboxProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      className={twMerge(checkboxStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Checkbox.displayName = "Checkbox";
