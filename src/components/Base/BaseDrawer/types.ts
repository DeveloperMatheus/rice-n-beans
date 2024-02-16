import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { baseDrawerStyles } from "./styles";

export type BaseDrawerProps = ComponentProps<"div"> &
  VariantProps<typeof baseDrawerStyles>;
