import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { labelStyles } from "./styles";

export type LabelProps = ComponentProps<"label"> &
  VariantProps<typeof labelStyles>;
