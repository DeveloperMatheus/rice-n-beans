import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { baseContainerStyles } from "./styles";

export type BaseContainerProps = ComponentProps<"div"> &
  VariantProps<typeof baseContainerStyles>;
