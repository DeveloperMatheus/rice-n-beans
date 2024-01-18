import { forwardRef } from "react";
import { SelectProps } from "./types";
import { selectStyles } from "./styles";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
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

Select.displayName = "Select";
