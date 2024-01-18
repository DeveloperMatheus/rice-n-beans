import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { buttonStyles } from "./styles";

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles>;
