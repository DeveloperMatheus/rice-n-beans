import { render, screen } from '@testing-library/react'
import { Select } from '..'

describe('Select Component', () => {
  it('should render the Select component with default styles', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    )

    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    expect(select).toHaveClass('text-contrast')
    expect(select).toHaveClass('w-full')
    expect(select).toHaveClass('rounded-lg')
    expect(select).toHaveClass('border')
    expect(select).toHaveClass('border-default')
    expect(select).toHaveClass('bg-white')
    expect(select).toHaveClass('dark:bg-scaffold')
    expect(select).toHaveClass('bg-select-icon')
    expect(select).toHaveClass('bg-no-repeat')
    expect(select).toHaveClass('bg-[position:center_right_0.75rem]')
    expect(select).toHaveClass('bg-[length:1.6rem]')
    expect(select).toHaveClass('pl-3')
    expect(select).toHaveClass('pr-8')
    expect(select).toHaveClass('py-2')
    expect(select).toHaveClass('placeholder:placeholder-muted')
    expect(select).toHaveClass('focus-visible:outline-hidden')
    expect(select).toHaveClass('focus-visible:ring-2')
    expect(select).toHaveClass('focus-visible:ring-default')
    expect(select).toHaveClass('focus-visible:outline-offset-0')
  })

  it('should apply the correct styles when isInvalid is true', () => {
    render(
      <Select isInvalid>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    )

    const select = screen.getByRole('combobox')
    expect(select).toHaveClass('focus-visible:ring-error') // Invalid state class
  })

  it('should apply the correct styles when disabled', () => {
    render(
      <Select disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    )

    const select = screen.getByRole('combobox')
    expect(select).toBeDisabled() // Ensure the select is disabled
    expect(select).toHaveClass('disabled:cursor-not-allowed') // Disabled state class
    expect(select).toHaveClass('disabled:opacity-50') // Disabled state class
  })

  it('should merge custom class names with the base styles', () => {
    render(
      <Select className="custom-class">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    )

    const select = screen.getByRole('combobox')
    expect(select).toHaveClass('custom-class') // Custom class
    expect(select).toHaveClass('text-contrast') // Default class
  })

  it('should render children (options) correctly', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    )

    const option1 = screen.getByText('Option 1')
    const option2 = screen.getByText('Option 2')
    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()
  })
})
