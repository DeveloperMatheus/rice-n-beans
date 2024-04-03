import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { accordionContentStyles, accordionStyles } from "./styles";

export type AccordionProps = ComponentProps<"div"> &
  VariantProps<typeof accordionStyles>;

export type AccordionContentProps = ComponentProps<"div"> &
  VariantProps<typeof accordionContentStyles>;

export type AccordionTriggerProps = ComponentProps<"button"> &
  VariantProps<typeof accordionStyles>;
