import { forwardRef } from "react";
import { FormSelectProps } from "./types";
import { selectStyles } from "./styles";

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, ...props }, ref) => (
    <select
      className={`${selectStyles({ className })} form__select`}
      ref={ref}
      {...props}
    >
      {props.children}
    </select>
  )
);

FormSelect.displayName = "FormSelect";
