import { render, screen, fireEvent } from '@testing-library/react'
import { Checkbox } from '..'

describe('Checkbox Component', () => {
  it('should render the Checkbox component with default styles', () => {
    render(<Checkbox />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveClass('bg-scaffold')
    expect(checkbox).toHaveClass('rounded-md')
    expect(checkbox).toHaveClass('min-h-5')
    expect(checkbox).toHaveClass('min-w-5')
    expect(checkbox).toHaveClass('cursor-pointer')
    expect(checkbox).toHaveClass('border')
    expect(checkbox).toHaveClass('border-default')
  })

  it('should render the Checkbox component as an input of type checkbox', () => {
    render(<Checkbox />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  it('should apply the correct styles when checked', () => {
    render(<Checkbox defaultChecked />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()

    expect(checkbox).toHaveClass('checked:before:absolute')
    expect(checkbox).toHaveClass('checked:before:top-1/2')
    expect(checkbox).toHaveClass('checked:before:left-1/2')
    expect(checkbox).toHaveClass('checked:before:w-4')
    expect(checkbox).toHaveClass('checked:before:h-4')
    expect(checkbox).toHaveClass('checked:before:leading-none')
    expect(checkbox).toHaveClass('checked:before:-translate-x-1/2')
    expect(checkbox).toHaveClass('checked:before:-translate-y-1/2')
    expect(checkbox).toHaveClass('checked:before:content-(--checkmark-icon)')
    expect(checkbox).toHaveClass('checked:before:brightness-0')
    expect(checkbox).toHaveClass('dark:checked:before:brightness-200')
  })

  it('should apply the correct styles when disabled', () => {
    render(<Checkbox disabled />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
    expect(checkbox).toHaveClass('disabled:cursor-not-allowed')
    expect(checkbox).toHaveClass('disabled:opacity-50')
  })

  it('should merge custom class names with the base styles', () => {
    render(<Checkbox className="custom-class" />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('custom-class')
    expect(checkbox).toHaveClass('bg-scaffold')
  })
})
