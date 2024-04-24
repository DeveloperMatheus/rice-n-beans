import { ComponentProps } from "react";

export type InputProps = ComponentProps<"input">;

export type CheckboxProps = ComponentProps<"input">;

export type LabelProps = ComponentProps<"label">;

export type RadioProps = ComponentProps<"input">;

export type SelectProps = ComponentProps<"select">;

export type SwitchProps = ComponentProps<"input">;

export type RangeProps = ComponentProps<"input">;

export type DatePickerProps = {
  type?: "date" | "time" | "datetime-local";
} & ComponentProps<"input">;

export type ErrorMessageProps = ComponentProps<"p">;
