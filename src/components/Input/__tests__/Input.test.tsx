import { render, screen } from '@testing-library/react'
import { Input } from '..'

describe('Input Component', () => {
  it('should render the Input component with default styles', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('rounded-lg') // Default border radius
    expect(input).toHaveClass('border') // Default border
    expect(input).toHaveClass('border-default') // Default border color
    expect(input).toHaveClass('bg-scaffold') // Default background color
    expect(input).toHaveClass('px-3') // Default padding
    expect(input).toHaveClass('py-2') // Default padding
  })

  it('should render the Input component as an input element', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')
    expect(input.tagName).toBe('INPUT') // Ensure it's an input element
  })

  it('should apply the correct styles when isInvalid is true', () => {
    render(<Input isInvalid />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('focus-visible:ring-error') // Invalid state class
  })

  it('should merge custom class names with the base styles', () => {
    render(<Input className="custom-class" />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('custom-class') // Custom class
    expect(input).toHaveClass('rounded-lg') // Default border radius
  })

  it('should apply the correct styles when disabled', () => {
    render(<Input disabled />)

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled() // Check if the input is disabled
    expect(input).toHaveClass('disabled:cursor-not-allowed') // Disabled state class
    expect(input).toHaveClass('disabled:opacity-50') // Disabled state class
  })
})
