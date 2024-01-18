import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { textStyles } from "./styles";

export type TextProps = ComponentProps<"p"> & VariantProps<typeof textStyles>;
