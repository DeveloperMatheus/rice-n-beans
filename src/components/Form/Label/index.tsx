import { forwardRef } from "react";

import { labelStyles } from "./styles";
import { LabelProps } from "./types";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => (
    <label className={labelStyles({ className })} ref={ref} {...props}>
      {children}
    </label>
  )
);

Label.displayName = "Label";
