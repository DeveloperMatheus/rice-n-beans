import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { titleStyles } from "./styles";

export type TitleProps = ComponentProps<"h1"> &
  VariantProps<typeof titleStyles>;
