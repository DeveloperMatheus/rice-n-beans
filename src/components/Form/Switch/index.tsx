import { forwardRef } from "react";
import { SwitchProps } from "./types";
import { switchStyles } from "./styles";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      role="switch"
      className={switchStyles({ className })}
      ref={ref}
      {...props}
    />
  )
);

Switch.displayName = "Switch";
