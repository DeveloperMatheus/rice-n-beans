import { forwardRef } from "react";

import { datePickerStyles } from "./styles";
import { DatePickerProps } from "./types";
import { twMerge } from "tailwind-merge";

/*
Possible values:
- type="date" -> 2024-02-06 (yyyy-mm-dd)
- type="datetime-local" -> 2024-02-06T02:36 (yyyy-mm-ddThh:mm)
- type="time" -> 02:36 (hh:mm)
*/

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, type = "date", ...props }, ref) => (
    <input
      type={type}
      pattern="\d{4}-\d{2}-\d{2}"
      className={twMerge(datePickerStyles({ className }))}
      ref={ref}
      {...props}
    />
  )
);

DatePicker.displayName = "DatePicker";
