import React, { forwardRef, useContext } from "react";
import { AccordionContentProps } from "./types";
import { twMerge } from "tailwind-merge";
import { accordionContentStyles } from "./styles";
import { AccordionContext } from "../context";

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, ref) => {
  const { isAccordionOpen, accordionId } = useContext(AccordionContext);

  if (!isAccordionOpen) return;

  return (
    <div
      className={twMerge(accordionContentStyles({ className }))}
      ref={ref}
      {...props}
      id={`accordion-${accordionId}`}
      aria-labelledby={accordionId}
      hidden={!isAccordionOpen}
      role="region"
    >
      {children}
    </div>
  );
});

AccordionContent.displayName = "AccordionContent";
