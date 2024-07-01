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

  function renderAccordionIcon(): React.ReactNode {
    const iconAnimation = isAccordionOpen ? "rotate-180" : "rotate-0";

    return (
      <div
        aria-hidden="true"
        tabIndex={-1}
        className={`transition-all ${iconAnimation} bg-black dark:bg-white w-6 h-6 [clip-path:polygon(50%_56.75%,_72.84%_34.4%,_79.46%_41.16%,_50%_70%,_20.49%_41.6%,_27.11%_34.72%)]`}
      ></div>
    );
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
      {renderAccordionIcon()}
    </Button>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";
