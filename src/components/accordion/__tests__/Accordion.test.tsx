import { render, screen, fireEvent } from '@testing-library/react'
import { Accordion, AccordionContent, AccordionTrigger } from '..'

describe('Accordion Component', () => {
  it('should toggle the visibility of AccordionContent when AccordionTrigger is clicked', () => {
    render(
      <Accordion>
        <AccordionTrigger id="accordion-1">Trigger 1</AccordionTrigger>
        <AccordionContent id="accordion-1">Content 1</AccordionContent>
      </Accordion>
    )

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()

    const trigger = screen.getByText('Trigger 1')
    fireEvent.click(trigger)

    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(trigger)

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('should render AccordionContent only when the corresponding AccordionTrigger is active', () => {
    render(
      <Accordion>
        <AccordionTrigger id="accordion-1">Trigger 1</AccordionTrigger>
        <AccordionContent id="accordion-1">Content 1</AccordionContent>
        <AccordionTrigger id="accordion-2">Trigger 2</AccordionTrigger>
        <AccordionContent id="accordion-2">Content 2</AccordionContent>
      </Accordion>
    )

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Trigger 1'))

    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Trigger 2'))

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })

  it('should correctly set aria attributes on AccordionContent and AccordionTrigger', () => {
    render(
      <Accordion>
        <AccordionTrigger id="accordion-1">Trigger 1</AccordionTrigger>
        <AccordionContent id="accordion-1">Content 1</AccordionContent>
      </Accordion>
    )

    const trigger = screen.getByText('Trigger 1')

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-controls', 'accordion-accordion-1')

    fireEvent.click(trigger)

    const content = screen.getByText('Content 1')
    expect(content).toHaveAttribute('aria-labelledby', 'accordion-1')
    expect(content).toHaveAttribute('role', 'region')
  })

  it('should render the accordion icon with the correct rotation class when open/closed', () => {
    render(
      <Accordion>
        <AccordionTrigger id="accordion-1">Trigger 1</AccordionTrigger>
        <AccordionContent id="accordion-1">Content 1</AccordionContent>
      </Accordion>
    )

    const trigger = screen.getByText('Trigger 1')
    const icon = trigger.querySelector('div') // The icon is a div inside the trigger

    expect(icon).not.toHaveClass('rotate-180')

    fireEvent.click(trigger)

    expect(icon).toHaveClass('rotate-180')

    fireEvent.click(trigger)

    expect(icon).not.toHaveClass('rotate-180')
  })

  it('should not render without a provider', async () => {
    expect(() => {
      render(<AccordionTrigger id="accordion-1">Trigger 1</AccordionTrigger>)
    }).toThrow('useCount must be used inside an AccordionProvider')
  })
})
