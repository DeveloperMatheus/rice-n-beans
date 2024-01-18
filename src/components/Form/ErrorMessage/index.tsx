import { forwardRef } from "react";

import { errorMessageStyles } from "./styles";
import { ErrorMessageProps } from "./types";

export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({ children, className, ...props }, ref) => (
    <span className={errorMessageStyles({ className })} ref={ref} {...props}>
      {children}
    </span>
  )
);

ErrorMessage.displayName = "ErrorMessage";
