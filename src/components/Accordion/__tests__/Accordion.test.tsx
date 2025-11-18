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

    // Initially, the content should not be visible
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()

    // Click the trigger to open the accordion
    const trigger = screen.getByText('Trigger 1')
    fireEvent.click(trigger)

    // Content should now be visible
    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    // Click the trigger again to close the accordion
    fireEvent.click(trigger)

    // Content should no longer be visible
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

    // Initially, no content should be visible
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()

    // Click the first trigger
    fireEvent.click(screen.getByText('Trigger 1'))

    // Only the first content should be visible
    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()

    // Click the second trigger
    fireEvent.click(screen.getByText('Trigger 2'))

    // Only the second content should be visible
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

    // Check aria attributes on the trigger
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-controls', 'accordion-accordion-1')

    // Click the trigger to open the accordion
    fireEvent.click(trigger)

    // Check aria attributes on the content
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

    // Initially, the icon should not have the rotation class
    expect(icon).not.toHaveClass('rotate-180')

    // Click the trigger to open the accordion
    fireEvent.click(trigger)

    // The icon should now have the rotation class
    expect(icon).toHaveClass('rotate-180')

    // Click the trigger again to close the accordion
    fireEvent.click(trigger)

    // The icon should no longer have the rotation class
    expect(icon).not.toHaveClass('rotate-180')
  })

  it('should not render without a provider', async () => {
    expect(() => {
      render(<AccordionTrigger id="accordion-1">Trigger 1</AccordionTrigger>)
    }).toThrow('useCount must be used inside an AccordionProvider')
  })
})
