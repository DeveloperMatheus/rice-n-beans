"use client";

import {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useId,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/Layout";

const accordionStyles =
  "w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3 rounded-lg";
const accordionContentStyles = "mt-3";
const accordionTriggerStyles =
  "w-full flex flex-row items-center justify-between";

/* --- Context --- */
type AccordionContextProps = {
  isAccordionOpen: boolean;
  setAccordionOpen: (value: boolean) => void;
  accordionId: string;
};

const InitAccordion: AccordionContextProps = {
  isAccordionOpen: false,
  setAccordionOpen: () => {},
  accordionId: "",
};

const AccordionContext = createContext<AccordionContextProps>(InitAccordion);

const AccordionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const accordionId = useId();

  return (
    <AccordionContext.Provider
      value={{ isAccordionOpen, setAccordionOpen, accordionId }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export { AccordionContext, AccordionProvider };

/* --- Wrapper --- */
export const Accordion = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <AccordionProvider>
        <div
          className={twMerge(accordionStyles, className)}
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

/* --- Content --- */
export const AccordionContent = forwardRef<
  HTMLDivElement,
  ComponentProps<"div">
>(({ children, className, ...props }, ref) => {
  const { isAccordionOpen, accordionId } = useContext(AccordionContext);

  if (!isAccordionOpen) return;

  return (
    <div
      className={twMerge(accordionContentStyles, className)}
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

/* --- Trigger --- */
export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ children, className, ...props }, ref) => {
  const { isAccordionOpen, setAccordionOpen, accordionId } =
    useContext(AccordionContext);

  function renderAccordionIcon() {
    if (isAccordionOpen) return "⬆";

    return "⬇";
  }

  return (
    <Button
      className={twMerge(accordionTriggerStyles, className)}
      ref={ref}
      {...props}
      variant="outline"
      id={accordionId}
      aria-expanded={isAccordionOpen}
      aria-controls={`accordion-${accordionId}`}
      onClick={() => setAccordionOpen(!isAccordionOpen)}
    >
      {children}
      <p aria-hidden="true" tabIndex={-1}>
        {renderAccordionIcon()}
      </p>
    </Button>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";
