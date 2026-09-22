import { render, screen } from '@testing-library/react'
import { Range } from '..'

describe('Range Component', () => {
  it('should render the Range component with default styles', () => {
    render(<Range />)

    const range = screen.getByRole('slider')
    expect(range).toBeInTheDocument()
    expect(range).toHaveClass('appearance-none')
    expect(range).toHaveClass('cursor-pointer')
    expect(range).toHaveClass('h-2')
    expect(range).toHaveClass('border')
    expect(range).toHaveClass('border-default')
    expect(range).toHaveClass('bg-scaffold')
    expect(range).toHaveClass('rounded-full')
  })

  it('should render the Range component as an input of type range', () => {
    render(<Range />)

    const range = screen.getByRole('slider')
    expect(range).toHaveAttribute('type', 'range')
  })

  it('should apply the correct styles when disabled', () => {
    render(<Range disabled />)

    const range = screen.getByRole('slider')
    expect(range).toBeDisabled()
    expect(range).toHaveClass('disabled:cursor-not-allowed')
    expect(range).toHaveClass('disabled:opacity-50')
  })

  it('should merge custom class names with the base styles', () => {
    render(<Range className="custom-class" />)

    const range = screen.getByRole('slider')
    expect(range).toHaveClass('custom-class')
    expect(range).toHaveClass('appearance-none')
  })
})
