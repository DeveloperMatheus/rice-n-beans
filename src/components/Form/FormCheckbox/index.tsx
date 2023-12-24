import { forwardRef } from "react";
import { checkboxStyles } from "./styles";
import { FormCheckboxProps } from "./types";

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      className={checkboxStyles({ className })}
      ref={ref}
      {...props}
    />
  )
);

FormCheckbox.displayName = "FormCheckbox";
