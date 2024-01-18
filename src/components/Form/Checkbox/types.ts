import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { checkboxStyles } from "./styles";

export type CheckboxProps = ComponentProps<"input"> &
  VariantProps<typeof checkboxStyles>;
