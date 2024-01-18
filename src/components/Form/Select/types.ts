import { ComponentProps } from "react";
import { selectStyles } from "./styles";
import { VariantProps } from "class-variance-authority";

export type SelectProps = ComponentProps<"select"> &
  VariantProps<typeof selectStyles>;
