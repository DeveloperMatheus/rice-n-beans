import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { radioStyles } from "./styles";

export type FormRadioProps = ComponentProps<"input"> &
  VariantProps<typeof radioStyles>;
