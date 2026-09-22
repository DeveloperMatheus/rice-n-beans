import { render, screen } from '@testing-library/react'
import { Separator } from '..'

describe('Separator Component', () => {
  it('should render the Separator component with default orientation (horizontal)', () => {
    render(<Separator />)

    const separator = screen.getByRole('separator')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveClass('shrink-0')
    expect(separator).toHaveClass('bg-muted')
    expect(separator).toHaveClass('h-px')
    expect(separator).toHaveClass('w-full')
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal')
  })

  it('should render the Separator component with vertical orientation', () => {
    render(<Separator orientation="vertical" />)

    const separator = screen.getByRole('separator')
    expect(separator).toHaveClass('h-full')
    expect(separator).toHaveClass('w-px')
    expect(separator).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('should merge custom class names with the base styles', () => {
    render(<Separator className="custom-class" />)

    const separator = screen.getByRole('separator')
    expect(separator).toHaveClass('custom-class')
    expect(separator).toHaveClass('shrink-0')
  })
})
