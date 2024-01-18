import { forwardRef } from "react";
import { buttonStyles } from "./styles";
import { ButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => (
    <button
      className={buttonStyles({ className, variant, size })}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
