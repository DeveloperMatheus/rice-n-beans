import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { checkboxStyles } from "./styles";

export type FormCheckboxProps = ComponentProps<"input"> &
  VariantProps<typeof checkboxStyles>;
