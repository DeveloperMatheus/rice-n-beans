import { forwardRef } from "react";
import { SelectProps } from "./types";
import { selectStyles } from "./styles";
import { twMerge } from "tailwind-merge";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <select
      className={twMerge(selectStyles({ className }))}
      ref={ref}
      {...props}
    >
      {props.children}
    </select>
  )
);

Select.displayName = "Select";
