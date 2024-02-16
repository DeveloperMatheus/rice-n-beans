import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { baseHeaderStyles } from "./styles";

export type BaseHeaderProps = ComponentProps<"div"> &
  VariantProps<typeof baseHeaderStyles>;
