import React from 'react'
import { render, screen } from '@testing-library/react'
import { DatePicker } from '..'

describe('DatePicker Component', () => {
  it('should render the DatePicker component with default type "date"', () => {
    render(<DatePicker data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toBeInTheDocument()
    expect(datePicker).toHaveAttribute('type', 'date') // Default type
    expect(datePicker).toHaveClass('rounded-lg') // Default border radius
    expect(datePicker).toHaveClass('border') // Default border
    expect(datePicker).toHaveClass('border-default') // Default border color
    expect(datePicker).toHaveClass('bg-scaffold') // Default background color
    expect(datePicker).toHaveClass('px-3') // Default padding
    expect(datePicker).toHaveClass('py-2') // Default padding
  })

  it('should render the DatePicker component with type "time"', () => {
    render(<DatePicker type="time" data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toHaveAttribute('type', 'time') // Custom type
  })

  it('should render the DatePicker component with type "datetime-local"', () => {
    render(<DatePicker type="datetime-local" data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toHaveAttribute('type', 'datetime-local') // Custom type
  })

  it('should merge custom class names with the base styles', () => {
    render(<DatePicker className="custom-class" data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toHaveClass('custom-class') // Custom class
    expect(datePicker).toHaveClass('bg-scaffold') // Default background color
  })

  it('should apply the correct styles when disabled', () => {
    render(<DatePicker disabled data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toBeDisabled() // Check if the input is disabled
    expect(datePicker).toHaveClass('disabled:cursor-not-allowed') // Disabled state class
    expect(datePicker).toHaveClass('disabled:opacity-50') // Disabled state class
  })

  it('should render with the correct pattern attribute for type="date"', () => {
    render(<DatePicker type="date" data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toHaveAttribute('pattern', '\\d{4}-\\d{2}-\\d{2}') // Pattern for date
  })
})
