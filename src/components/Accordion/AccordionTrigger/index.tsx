import React, { forwardRef, useContext, useId } from "react";
import { Button } from "~/components/Layout";
import { AccordionProps } from "./types";
import { twMerge } from "tailwind-merge";
import { accordionStyles } from "./styles";
import { AccordionContext } from "../context";

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionProps>(
  ({ children, className, ...props }, ref) => {
    const { isAccordionOpen, setAccordionOpen, accordionId } =
      useContext(AccordionContext);

    function renderAccordionIcon() {
      if (isAccordionOpen) return "↑";

      return "↓";
    }

    return (
      <Button
        className={twMerge(accordionStyles({ className }))}
        ref={ref}
        {...props}
        variant="outline"
        id={accordionId}
        aria-expanded={isAccordionOpen}
        aria-controls={`accordion-${accordionId}`}
        onClick={() => setAccordionOpen(!isAccordionOpen)}
      >
        {children}
        {renderAccordionIcon()}
      </Button>
    );
  }
);

AccordionTrigger.displayName = "AccordionTrigger";
