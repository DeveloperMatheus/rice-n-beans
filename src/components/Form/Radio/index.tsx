import { forwardRef } from "react";

import { radioStyles } from "./styles";
import { RadioProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => (
    <input
      type="radio"
      className={twMerge(radioStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

Radio.displayName = "Radio";
