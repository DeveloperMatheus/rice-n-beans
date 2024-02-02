import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { datePickerStyles } from "./styles";

export type DatePickerProps = {
  type?: "date" | "time" | "datetime-local";
} & ComponentProps<"input"> &
  VariantProps<typeof datePickerStyles>;
