import { render, screen } from '@testing-library/react'
import { Range } from '..'

describe('Range Component', () => {
  it('should render the Range component with default styles', () => {
    render(<Range />)

    const range = screen.getByRole('slider')
    expect(range).toBeInTheDocument()
    expect(range).toHaveClass('appearance-none') // Default class
    expect(range).toHaveClass('cursor-pointer') // Default class
    expect(range).toHaveClass('h-2') // Default class
    expect(range).toHaveClass('border') // Default class
    expect(range).toHaveClass('border-default') // Default class
    expect(range).toHaveClass('bg-scaffold') // Default class
    expect(range).toHaveClass('rounded-full') // Default class
  })

  it('should render the Range component as an input of type range', () => {
    render(<Range />)

    const range = screen.getByRole('slider')
    expect(range).toHaveAttribute('type', 'range') // Ensure it's a range input
  })

  it('should apply the correct styles when disabled', () => {
    render(<Range disabled />)

    const range = screen.getByRole('slider')
    expect(range).toBeDisabled() // Ensure the range is disabled
    expect(range).toHaveClass('disabled:cursor-not-allowed') // Disabled state class
    expect(range).toHaveClass('disabled:opacity-50') // Disabled state class
  })

  it('should merge custom class names with the base styles', () => {
    render(<Range className="custom-class" />)

    const range = screen.getByRole('slider')
    expect(range).toHaveClass('custom-class') // Custom class
    expect(range).toHaveClass('appearance-none') // Default class
  })
})
