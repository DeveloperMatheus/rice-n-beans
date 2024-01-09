import { forwardRef } from "react";
import { FormSwitchProps } from "./types";
import { switchStyles } from "./styles";

export const FormSwitch = forwardRef<HTMLInputElement, FormSwitchProps>(
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

FormSwitch.displayName = "FormSwitch";
