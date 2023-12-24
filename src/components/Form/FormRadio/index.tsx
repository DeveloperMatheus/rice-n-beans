import { forwardRef } from "react";

import { radioStyles } from "./styles";
import { FormRadioProps } from "./types";

export const FormRadio = forwardRef<HTMLInputElement, FormRadioProps>(
  ({ className, ...props }, ref) => (
    <input
      type="radio"
      className={radioStyles({ className })}
      ref={ref}
      {...props}
    />
  )
);

FormRadio.displayName = "FormRadio";
