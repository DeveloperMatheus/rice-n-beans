import { forwardRef } from "react";

import { inputStyles } from "./styles";
import { FormInputProps } from "./types";

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...props }, ref) => (
    <input className={inputStyles({ className })} ref={ref} {...props} />
  )
);

FormInput.displayName = "FormInput";
