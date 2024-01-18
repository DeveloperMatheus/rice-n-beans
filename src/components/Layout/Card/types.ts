import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { cardStyles } from "./styles";

export type CardProps = ComponentProps<"div"> & VariantProps<typeof cardStyles>;
