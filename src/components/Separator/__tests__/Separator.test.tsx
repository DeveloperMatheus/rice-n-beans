import { render, screen } from '@testing-library/react'
import { Separator } from '..'

describe('Separator Component', () => {
  it('should render the Separator component with default orientation (horizontal)', () => {
    render(<Separator />)

    const separator = screen.getByRole('separator')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveClass('shrink-0') // Default class
    expect(separator).toHaveClass('bg-muted') // Default class
    expect(separator).toHaveClass('h-px') // Horizontal orientation class
    expect(separator).toHaveClass('w-full') // Horizontal orientation class
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal') // Default aria-orientation
  })

  it('should render the Separator component with vertical orientation', () => {
    render(<Separator orientation="vertical" />)

    const separator = screen.getByRole('separator')
    expect(separator).toHaveClass('h-full') // Vertical orientation class
    expect(separator).toHaveClass('w-px') // Vertical orientation class
    expect(separator).toHaveAttribute('aria-orientation', 'vertical') // Custom aria-orientation
  })

  it('should merge custom class names with the base styles', () => {
    render(<Separator className="custom-class" />)

    const separator = screen.getByRole('separator')
    expect(separator).toHaveClass('custom-class') // Custom class
    expect(separator).toHaveClass('shrink-0') // Default class
  })
})
