import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { badgeStyles } from "./styles";
import { BadgeProps } from "./types";

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, ...props }, ref) => (
    <span className={twMerge(badgeStyles({ className }))} ref={ref} {...props}>
      {children}
    </span>
  )
);

Badge.displayName = "Badge";
