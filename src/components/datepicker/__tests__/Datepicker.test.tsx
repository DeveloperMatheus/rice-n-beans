import { render, screen } from '@testing-library/react'
import { DatePicker } from '..'

describe('DatePicker Component', () => {
  it('should render the DatePicker component with default type "date"', () => {
    render(<DatePicker data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toBeInTheDocument()
    expect(datePicker).toHaveAttribute('type', 'date')
    expect(datePicker).toHaveClass('rounded-lg')
    expect(datePicker).toHaveClass('border')
    expect(datePicker).toHaveClass('border-default')
    expect(datePicker).toHaveClass('bg-scaffold')
    expect(datePicker).toHaveClass('px-3')
    expect(datePicker).toHaveClass('py-2')
  })

  it('should render the DatePicker component with type "time"', () => {
    render(<DatePicker type="time" data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toHaveAttribute('type', 'time')
  })

  it('should render the DatePicker component with type "datetime-local"', () => {
    render(<DatePicker type="datetime-local" data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toHaveAttribute('type', 'datetime-local')
  })

  it('should merge custom class names with the base styles', () => {
    render(<DatePicker className="custom-class" data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toHaveClass('custom-class')
    expect(datePicker).toHaveClass('bg-scaffold')
  })

  it('should apply the correct styles when disabled', () => {
    render(<DatePicker disabled data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toBeDisabled()
    expect(datePicker).toHaveClass('disabled:cursor-not-allowed')
    expect(datePicker).toHaveClass('disabled:opacity-50')
  })

  it('should render with the correct pattern attribute for type="date"', () => {
    render(<DatePicker type="date" data-testid="date-input" />)

    const datePicker = screen.getByTestId('date-input')
    expect(datePicker).toHaveAttribute('pattern', '\\d{4}-\\d{2}-\\d{2}')
  })
})
