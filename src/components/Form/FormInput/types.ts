import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { inputStyles } from "./styles";

export type FormInputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyles>;
