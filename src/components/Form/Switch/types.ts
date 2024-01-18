import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { switchStyles } from "./styles";

export type SwitchProps = ComponentProps<"input"> &
  VariantProps<typeof switchStyles>;
