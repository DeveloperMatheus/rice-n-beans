import { forwardRef } from "react";

import { inputStyles } from "./styles";
import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input className={inputStyles({ className })} ref={ref} {...props} />
  )
);

Input.displayName = "Input";
