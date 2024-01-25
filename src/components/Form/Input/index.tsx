import { forwardRef } from "react";

import { inputStyles } from "./styles";
import { InputProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className={twMerge(inputStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";
