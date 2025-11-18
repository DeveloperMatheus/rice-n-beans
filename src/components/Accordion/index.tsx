'use client'

import { ComponentProps, createContext, useContext, useState } from 'react'
import { tv } from 'tailwind-variants'
import { Button } from '~/components/Button'

const accordionStyles = tv({
  slots: {
    wrapper: 'w-full space-y-3',
    content: 'mt-3 px-5',
    trigger: 'flex w-full flex-row items-center justify-between'
  }
})

const { wrapper, content, trigger } = accordionStyles()

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

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
)

const useAccordionContext = () => {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error('useCount must be used inside an AccordionProvider')
  }

  return context
}

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
      <div className={wrapper({ className })} {...props}>
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
  const { activeAccordion } = useAccordionContext()

  if (!isAccordionOpen(id, activeAccordion)) return

  return (
    <div
      className={content({ className })}
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
  const { activeAccordion, setActiveAccordion } = useAccordionContext()

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
      className={trigger({ className })}
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
