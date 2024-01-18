import { forwardRef } from "react";

import { cardStyles } from "./styles";
import { CardProps } from "./types";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => (
    <div className={cardStyles({ className })} ref={ref} {...props}>
      {children}
    </div>
  )
);

Card.displayName = "Card";
