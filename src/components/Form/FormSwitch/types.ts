import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { switchStyles } from "./styles";

export type FormSwitchProps = ComponentProps<"input"> &
  VariantProps<typeof switchStyles>;
