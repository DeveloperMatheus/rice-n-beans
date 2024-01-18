import { forwardRef } from "react";

import { textStyles } from "./styles";
import { TextProps } from "./types";

export const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ children, className, ...props }, ref) => (
    <p className={textStyles({ className })} ref={ref} {...props}>
      {children}
    </p>
  )
);

Text.displayName = "Text";
