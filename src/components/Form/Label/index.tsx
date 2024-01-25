import { forwardRef } from "react";

import { labelStyles } from "./styles";
import { LabelProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => (
    <label className={twMerge(labelStyles({ className }))} ref={ref} {...props}>
      {children}
    </label>
  )
);

Label.displayName = "Label";
