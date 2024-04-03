"use client";

import React, { forwardRef } from "react";
import { AccordionProps } from "./types";
import { twMerge } from "tailwind-merge";
import { accordionStyles } from "./styles";
import { AccordionProvider } from "../context";

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <AccordionProvider>
        <div
          className={twMerge(accordionStyles({ className }))}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </AccordionProvider>
    );
  }
);

Accordion.displayName = "Accordion";

// const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
//   ({ children, className, ...props }, ref) => {
//     const { isAccordionOpen, setAccordionOpen, accordionId } =
//       useContext(AccordionContext);

//     function renderAccordionIcon() {
//       if (isAccordionOpen) return "↑";

//       return "↓";
//     }

//     return (
//       <Button
//         className={twMerge(accordionStyles({ className }))}
//         ref={ref}
//         {...props}
//         variant="outline"
//         aria-expanded={isAccordionOpen}
//         onClick={() => setAccordionOpen(!isAccordionOpen)}
//       >
//         {children}
//         {renderAccordionIcon()}
//       </Button>
//     );
//   }
// );

// AccordionTrigger.displayName = "AccordionTrigger";
