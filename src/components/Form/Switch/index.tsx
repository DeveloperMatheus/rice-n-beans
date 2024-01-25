import { forwardRef } from "react";
import { SwitchProps } from "./types";
import { switchStyles } from "./styles";
import { twMerge } from "tailwind-merge";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      role="switch"
      className={twMerge(switchStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Switch.displayName = "Switch";
