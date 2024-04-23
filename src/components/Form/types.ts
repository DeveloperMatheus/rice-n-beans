import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import {
  checkboxStyles,
  datePickerStyles,
  errorMessageStyles,
  inputStyles,
  labelStyles,
  radioStyles,
  selectStyles,
  switchStyles,
} from ".";

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyles>;

export type CheckboxProps = ComponentProps<"input"> &
  VariantProps<typeof checkboxStyles>;

export type LabelProps = ComponentProps<"label"> &
  VariantProps<typeof labelStyles>;

export type RadioProps = ComponentProps<"input"> &
  VariantProps<typeof radioStyles>;

export type SelectProps = ComponentProps<"select"> &
  VariantProps<typeof selectStyles>;

export type SwitchProps = ComponentProps<"input"> &
  VariantProps<typeof switchStyles>;

export type RangeProps = ComponentProps<"input">;

export type DatePickerProps = {
  type?: "date" | "time" | "datetime-local";
} & ComponentProps<"input"> &
  VariantProps<typeof datePickerStyles>;

export type ErrorMessageProps = ComponentProps<"p"> &
  VariantProps<typeof errorMessageStyles>;
