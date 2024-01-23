import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./styles";
import { ButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => (
    <button
      className={twMerge(buttonStyles({ className, variant, size }))}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
