import { forwardRef } from "react";

import { formErrorMessageStyles } from "./styles";
import { FormErrorMessageProps } from "./types";

export const FormErrorMessage = forwardRef<
  HTMLParagraphElement,
  FormErrorMessageProps
>(({ children, className, ...props }, ref) => (
  <span className={formErrorMessageStyles({ className })} ref={ref} {...props}>
    {children}
  </span>
));

FormErrorMessage.displayName = "FormErrorMessage";
