'use client'

import { ComponentProps, createContext, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '~/components/Layout'

const accordionStyles = 'w-full bg-scaffold border border-muted p-3 rounded-lg'
const accordionContentStyles = 'mt-3'
const accordionTriggerStyles =
  'w-full flex flex-row items-center justify-between'

/* --- Context --- */
type AccordionProviderProps = {
  children: React.ReactNode
  defaultValue?: string
}

type AccordionContextProps = {
  activeAccordion?: string
  setActiveAccordion: (value?: string) => void
}

const InitAccordion: AccordionContextProps = {
  activeAccordion: undefined,
  setActiveAccordion: (value?: string) => {}
}

const AccordionContext = createContext<AccordionContextProps>(InitAccordion)

const AccordionProvider = ({
  children,
  defaultValue
}: AccordionProviderProps) => {
  const [activeAccordion, setActiveAccordion] = useState(defaultValue)

  return (
    <AccordionContext value={{ activeAccordion, setActiveAccordion }}>
      {children}
    </AccordionContext>
  )
}

/* --- Wrapper --- */
const Accordion = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <AccordionProvider>
      <div className={twMerge(accordionStyles, className)} {...props}>
        {children}
      </div>
    </AccordionProvider>
  )
}

Accordion.displayName = 'Accordion'

/* --- Content --- */
type AccordionContentProps = {
  id: string
} & ComponentProps<'div'>

const AccordionContent = ({
  children,
  className,
  id,
  ...props
}: AccordionContentProps) => {
  const { activeAccordion } = useContext(AccordionContext)

  function isAccordionOpen(): boolean {
    return activeAccordion === id
  }

  if (!isAccordionOpen()) return

  return (
    <div
      className={twMerge(accordionContentStyles, className)}
      {...props}
      id={`accordion-${id}`}
      aria-labelledby={id}
      hidden={!isAccordionOpen()}
      role="region"
    >
      {children}
    </div>
  )
}

AccordionContent.displayName = 'AccordionContent'

/* --- Trigger --- */
type AccordionTriggerProps = {
  id: string
} & ComponentProps<'button'>

const AccordionTrigger = ({
  children,
  className,
  id,
  ...props
}: AccordionTriggerProps) => {
  const { activeAccordion, setActiveAccordion } = useContext(AccordionContext)

  function isAccordionOpen(): boolean {
    return activeAccordion === id
  }

  function renderAccordionIcon(): React.ReactNode {
    const iconAnimation = isAccordionOpen() ? 'rotate-180' : 'rotate-0'

    return (
      <div
        aria-hidden="true"
        tabIndex={-1}
        className={`transition-all ${iconAnimation} min-w-6 min-h-6 bg-arrow-icon`}
      ></div>
    )
  }

  return (
    <Button
      className={twMerge(accordionTriggerStyles, className)}
      {...props}
      variant="outline"
      id={id}
      aria-expanded={isAccordionOpen()}
      aria-controls={`accordion-${id}`}
      onClick={() => {
        setActiveAccordion(isAccordionOpen() ? undefined : id)
      }}
    >
      {children}
      {renderAccordionIcon()}
    </Button>
  )
}

AccordionTrigger.displayName = 'AccordionTrigger'

export { Accordion, AccordionContent, AccordionTrigger }
