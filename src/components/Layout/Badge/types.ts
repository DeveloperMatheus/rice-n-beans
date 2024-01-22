import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { badgeStyles } from "./styles";

export type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeStyles>;
