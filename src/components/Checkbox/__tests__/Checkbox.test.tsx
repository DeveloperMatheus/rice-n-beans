import React from 'react'
import { render, screen } from '@testing-library/react'
import { Checkbox } from '..'

describe('Checkbox Component', () => {
  it('should render the Checkbox component with default styles', () => {
    render(<Checkbox />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveClass('bg-scaffold') // Default background color
    expect(checkbox).toHaveClass('rounded-md') // Default border radius
    expect(checkbox).toHaveClass('min-h-5') // Default minimum height
    expect(checkbox).toHaveClass('min-w-5') // Default minimum width
    expect(checkbox).toHaveClass('cursor-pointer') // Default cursor
    expect(checkbox).toHaveClass('border') // Default border
    expect(checkbox).toHaveClass('border-default') // Default border color
  })

  it('should render the Checkbox component as an input of type checkbox', () => {
    render(<Checkbox />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  it('should merge custom class names with the base styles', () => {
    render(<Checkbox className="custom-class" />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('custom-class') // Custom class
    expect(checkbox).toHaveClass('bg-scaffold') // Default background color
  })

  it('should apply the correct styles when checked', () => {
    render(<Checkbox checked onChange={() => {}} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked() // Check if the checkbox is checked

    // Check for the pseudo-element styles when checked
    expect(checkbox).toHaveClass('checked:before:absolute')
    expect(checkbox).toHaveClass('checked:before:top-1/2')
    expect(checkbox).toHaveClass('checked:before:left-1/2')
    expect(checkbox).toHaveClass('checked:before:w-[1rem]')
    expect(checkbox).toHaveClass('checked:before:h-[1rem]')
    expect(checkbox).toHaveClass('checked:before:leading-none')
    expect(checkbox).toHaveClass('checked:before:-translate-x-1/2')
    expect(checkbox).toHaveClass('checked:before:-translate-y-1/2')
    expect(checkbox).toHaveClass('checked:before:content-checkmark-icon')
    expect(checkbox).toHaveClass('checked:before:brightness-0')
    expect(checkbox).toHaveClass('dark:checked:before:brightness-200')
  })
})
