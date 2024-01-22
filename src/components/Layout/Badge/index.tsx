import { forwardRef } from "react";

import { badgeStyles } from "./styles";
import { BadgeProps } from "./types";

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, ...props }, ref) => (
    <span className={badgeStyles({ className })} ref={ref} {...props}>
      {children}
    </span>
  )
);

Badge.displayName = "Badge";
