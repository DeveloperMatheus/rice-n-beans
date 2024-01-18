import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { radioStyles } from "./styles";

export type RadioProps = ComponentProps<"input"> &
  VariantProps<typeof radioStyles>;
