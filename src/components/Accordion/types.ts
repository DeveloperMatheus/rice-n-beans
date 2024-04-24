import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import {
  accordionContentStyles,
  accordionStyles,
  accordionTriggerStyles,
} from ".";

export type AccordionContextProps = {
  isAccordionOpen: boolean;
  setAccordionOpen: (value: boolean) => void;
  accordionId: string;
};

export type AccordionProps = ComponentProps<"div">;

export type AccordionContentProps = ComponentProps<"div">;

export type AccordionTriggerProps = ComponentProps<"button">;
