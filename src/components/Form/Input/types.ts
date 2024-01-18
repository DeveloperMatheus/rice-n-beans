import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { inputStyles } from "./styles";

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyles>;
