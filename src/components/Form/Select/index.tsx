import { forwardRef } from "react";
import { SelectProps } from "./types";
import { selectStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import styles from "./select.module.css";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <select
      className={twMerge(selectStyles({ className }), styles.form__select)}
      ref={ref}
      {...props}
    >
      {props.children}
    </select>
  )
);

Select.displayName = "Select";
