'use client'

import { ComponentProps, createContext, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '~/components/Button'

const accordionStyles = 'w-full'
const accordionContentStyles = 'mt-3 px-5'
const accordionTriggerStyles =
  'flex w-full flex-row items-center justify-between'

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

const isAccordionOpen = (id: string, activeAccordion?: string): boolean =>
  id === activeAccordion

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

  if (!isAccordionOpen(id, activeAccordion)) return

  return (
    <div
      className={twMerge(accordionContentStyles, className)}
      {...props}
      id={`accordion-${id}`}
      aria-labelledby={id}
      hidden={!isAccordionOpen(id, activeAccordion)}
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

  const renderAccordionIcon = (): React.ReactNode => {
    const iconAnimation = isAccordionOpen(id, activeAccordion)
      ? 'rotate-180'
      : 'rotate-0'

    return (
      <div
        aria-hidden="true"
        tabIndex={-1}
        className={`bg-arrow-icon min-h-6 min-w-6 ${iconAnimation} transition-all`}
      ></div>
    )
  }

  const handleToggle = () =>
    setActiveAccordion(isAccordionOpen(id, activeAccordion) ? undefined : id)

  return (
    <Button
      className={twMerge(accordionTriggerStyles, className)}
      {...props}
      variant="outline"
      id={id}
      aria-expanded={isAccordionOpen(id, activeAccordion)}
      aria-controls={`accordion-${id}`}
      onClick={handleToggle}
    >
      {children}
      {renderAccordionIcon()}
    </Button>
  )
}

AccordionTrigger.displayName = 'AccordionTrigger'

export { Accordion, AccordionContent, AccordionTrigger }
