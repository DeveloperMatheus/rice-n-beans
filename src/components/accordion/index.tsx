'use client'

import {
  ComponentProps,
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react'
import { tv } from 'tailwind-variants'
import { Button } from '~/components/button'

const accordionStyles = tv({
  slots: {
    wrapper: 'w-full space-y-3',
    content: 'mt-3 px-5',
    trigger: 'flex w-full flex-row items-center justify-between',
    icon: 'bg-arrow-icon min-h-6 min-w-6 transition-all'
  },
  variants: {
    isOpen: {
      true: { icon: 'rotate-180' },
      false: { icon: 'rotate-0' }
    }
  }
})

const { wrapper, content, trigger } = accordionStyles()

/* --- Context --- */
type AccordionProviderProps = {
  children: ReactNode
  defaultValue?: string
}

type AccordionContextProps = {
  activeAccordion?: string
  setActiveAccordion: (value?: string) => void
}

const isAccordionOpen = (id: string, activeAccordion?: string): boolean =>
  id === activeAccordion

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
)

const useAccordionContext = () => {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error('useAccordionContext must be used inside an Accordion')
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
type AccordionProps = {
  defaultValue?: string
} & Omit<ComponentProps<'div'>, 'defaultValue'>

const Accordion = ({ className, defaultValue, ...props }: AccordionProps) => (
  <AccordionProvider defaultValue={defaultValue}>
    <div className={wrapper({ className })} {...props} />
  </AccordionProvider>
)

/* --- Content --- */
type AccordionContentProps = {
  id: string
} & ComponentProps<'div'>

const AccordionContent = ({
  className,
  id,
  ...props
}: AccordionContentProps) => {
  const { activeAccordion } = useAccordionContext()

  if (!isAccordionOpen(id, activeAccordion)) return null

  return (
    <div
      className={content({ className })}
      {...props}
      id={`accordion-${id}`}
      aria-labelledby={id}
      role="region"
    />
  )
}

/* --- Trigger --- */
type AccordionTriggerProps = {
  id: string
} & ComponentProps<'button'>

const AccordionTrigger = ({
  children,
  className,
  id,
  onClick,
  ...props
}: AccordionTriggerProps) => {
  const { activeAccordion, setActiveAccordion } = useAccordionContext()
  const isOpen = isAccordionOpen(id, activeAccordion)
  const { icon } = accordionStyles({ isOpen })

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(event)

    setActiveAccordion(isOpen ? undefined : id)
  }

  return (
    <Button
      className={trigger({ className })}
      {...props}
      variant="outline"
      id={id}
      aria-expanded={isOpen}
      aria-controls={`accordion-${id}`}
      onClick={handleToggle}
    >
      {children}
      <div aria-hidden="true" className={icon()} />
    </Button>
  )
}

export { Accordion, AccordionContent, AccordionTrigger }
