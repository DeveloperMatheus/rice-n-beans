import { render, screen } from '@testing-library/react'
import { Input } from '..'

describe('Input Component', () => {
  it('should render the Input component with default styles', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('text-scaffold-contrast')
    expect(input).toHaveClass('rounded-lg')
    expect(input).toHaveClass('border')
    expect(input).toHaveClass('border-default')
    expect(input).toHaveClass('bg-scaffold')
    expect(input).toHaveClass('px-3')
    expect(input).toHaveClass('py-2')
  })

  it('should render the Input component as an input element', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')
    expect(input.tagName).toBe('INPUT')
  })

  it('should apply the correct styles when isInvalid is true', () => {
    render(<Input isInvalid />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('focus-visible:ring-error')
  })

  it('should merge custom class names with the base styles', () => {
    render(<Input className="custom-class" />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('custom-class')
    expect(input).toHaveClass('rounded-lg')
  })

  it('should apply the correct styles when disabled', () => {
    render(<Input disabled />)

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    expect(input).toHaveClass('disabled:cursor-not-allowed')
    expect(input).toHaveClass('disabled:opacity-50')
  })
})
