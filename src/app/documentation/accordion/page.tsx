import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "~/components/Accordion";

const ACCORDION_CODE_STLYE = `"use client";

import {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/Layout";

const accordionStyles =
  "w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3 rounded-lg";
const accordionContentStyles = "mt-3";
const accordionTriggerStyles =
  "w-full flex flex-row items-center justify-between";
`;

const ACCORDION_CODE_COMPONENT = `/* --- Context --- */
type AccordionProviderProps = {
  children: React.ReactNode;
  defaultValue?: string;
};

type AccordionContextProps = {
  activeAccordion?: string;
  setActiveAccordion: (value?: string) => void;
};

const InitAccordion: AccordionContextProps = {
  activeAccordion: undefined,
  setActiveAccordion: (value?: string) => {},
};

const AccordionContext = createContext<AccordionContextProps>(InitAccordion);

const AccordionProvider = ({
  children,
  defaultValue,
}: AccordionProviderProps) => {
  const [activeAccordion, setActiveAccordion] = useState(defaultValue);

  return (
    <AccordionContext.Provider value={{ activeAccordion, setActiveAccordion }}>
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
type AccordionContentProps = {
  id: string;
} & ComponentProps<"div">;

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, id, ...props }, ref) => {
  const { activeAccordion } = useContext(AccordionContext);

  function isAccordionOpen(): boolean {
    return activeAccordion === id;
  }

  if (!isAccordionOpen()) return;

  return (
    <div
      className={twMerge(accordionContentStyles, className)}
      ref={ref}
      {...props}
      id={\`accordion-$\{id}\`}
      aria-labelledby={id}
      hidden={!isAccordionOpen()}
      role="region"
    >
      {children}
    </div>
  );
});

AccordionContent.displayName = "AccordionContent";

/* --- Trigger --- */
type AccordionTriggerProps = {
  id: string;
} & ComponentProps<"button">;

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, id, ...props }, ref) => {
  const { activeAccordion, setActiveAccordion } = useContext(AccordionContext);

  function isAccordionOpen(): boolean {
    return activeAccordion === id;
  }

  function renderAccordionIcon(): React.ReactNode {
    const iconAnimation = isAccordionOpen() ? "rotate-180" : "rotate-0";

    return (
      <div
        aria-hidden="true"
        tabIndex={-1}
        className={\`transition-all $\{iconAnimation} bg-black dark:bg-white w-6 h-6 [clip-path:polygon(50%_56.75%,_72.84%_34.4%,_79.46%_41.16%,_50%_70%,_20.49%_41.6%,_27.11%_34.72%)]\`}
      ></div>
    );
  }

  return (
    <Button
      className={twMerge(accordionTriggerStyles, className)}
      ref={ref}
      {...props}
      variant="outline"
      id={id}
      aria-expanded={isAccordionOpen()}
      aria-controls={\`accordion-$\{id}\`}
      onClick={() => {
        setActiveAccordion(isAccordionOpen() ? undefined : id);
      }}
    >
      {children}
      {renderAccordionIcon()}
    </Button>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";
`;

const ACCORDION_CODE_VIEW = `<Accordion className="space-y-3">
  <div>
    <AccordionTrigger id="test1">Accordion 1</AccordionTrigger>
    <AccordionContent id="test1">Content 1</AccordionContent>
  </div>
  <div>
    <AccordionTrigger id="test2">Accordion 2</AccordionTrigger>
    <AccordionContent id="test2">Content 2</AccordionContent>
  </div>
  <div>
    <AccordionTrigger id="test3">Accordion 3</AccordionTrigger>
    <AccordionContent id="test3">Content 3</AccordionContent>
  </div>
</Accordion>
`;

export default function DocumentationAccordionPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Accordion</Text>

        <Text tag="h2">
          Accordion is a component that allows you to show and hide content
          depending on the user&rsquo;s interaction.
        </Text>
      </div>

      <DocumentationSection
        title="Accordion"
        codeStyle={ACCORDION_CODE_STLYE}
        codeComponent={ACCORDION_CODE_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList className="p-0">
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Accordion className="space-y-3">
              <div>
                <AccordionTrigger id="test1">Accordion 1</AccordionTrigger>
                <AccordionContent id="test1">Content 1</AccordionContent>
              </div>
              <div>
                <AccordionTrigger id="test2">Accordion 2</AccordionTrigger>
                <AccordionContent id="test2">Content 2</AccordionContent>
              </div>
              <div>
                <AccordionTrigger id="test3">Accordion 3</AccordionTrigger>
                <AccordionContent id="test3">Content 3</AccordionContent>
              </div>
            </Accordion>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{ACCORDION_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  );
}
