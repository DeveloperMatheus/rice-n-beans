import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { accordionContentStyles } from "./styles";

export type AccordionContentProps = ComponentProps<"div"> &
  VariantProps<typeof accordionContentStyles>;
