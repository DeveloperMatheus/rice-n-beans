import { render, screen } from '@testing-library/react'
import { Switch } from '..'

describe('Switch Component', () => {
  it('should render the Switch component with default styles', () => {
    render(<Switch />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeInTheDocument()
    expect(switchElement).toHaveClass('appearance-none')
    expect(switchElement).toHaveClass('cursor-pointer')
    expect(switchElement).toHaveClass('min-w-10')
    expect(switchElement).toHaveClass('min-h-6')
    expect(switchElement).toHaveClass('rounded-full')
    expect(switchElement).toHaveClass('border')
    expect(switchElement).toHaveClass('border-default')
    expect(switchElement).toHaveClass('bg-scaffold')
  })

  it('should render the Switch component as an input of type checkbox with role="switch"', () => {
    render(<Switch />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('type', 'checkbox') // Ensure it's a checkbox input
    expect(switchElement).toHaveAttribute('role', 'switch') // Ensure it has the correct role
  })

  it('should apply the correct styles when checked', () => {
    render(<Switch defaultChecked />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeChecked() // Ensure the switch is checked

    // Check for the pseudo-element styles when checked
    expect(switchElement).toHaveClass('checked:bg-success') // Checked background color
    expect(switchElement).toHaveClass('checked:before:bg-white') // Checked pseudo-element background color
    expect(switchElement).toHaveClass('checked:before:left-6') // Checked pseudo-element position
  })

  it('should apply the correct styles when disabled', () => {
    render(<Switch disabled />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeDisabled() // Ensure the switch is disabled
    expect(switchElement).toHaveClass('disabled:opacity-30') // Disabled state class
    expect(switchElement).toHaveClass('disabled:cursor-not-allowed') // Disabled state class
  })

  it('should merge custom class names with the base styles', () => {
    render(<Switch className="custom-class" />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveClass('custom-class') // Custom class
    expect(switchElement).toHaveClass('appearance-none') // Default class
  })
})
