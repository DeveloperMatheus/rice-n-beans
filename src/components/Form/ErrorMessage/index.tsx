import { forwardRef } from "react";

import { errorMessageStyles } from "./styles";
import { ErrorMessageProps } from "./types";
import { twMerge } from "tailwind-merge";

export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({ children, className, ...props }, ref) => (
    <p
      className={twMerge(errorMessageStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  )
);

ErrorMessage.displayName = "ErrorMessage";
