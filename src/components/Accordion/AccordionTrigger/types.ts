import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { accordionStyles } from "./styles";

export type AccordionProps = ComponentProps<"button"> &
  VariantProps<typeof accordionStyles>;
