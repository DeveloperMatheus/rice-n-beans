import { forwardRef } from "react";

import { radioStyles } from "./styles";
import { RadioProps } from "./types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => (
    <input
      type="radio"
      className={radioStyles({ className })}
      ref={ref}
      {...props}
    />
  )
);

Radio.displayName = "Radio";
