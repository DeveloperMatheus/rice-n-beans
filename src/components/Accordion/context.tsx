import { createContext, useId, useState } from "react";

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
