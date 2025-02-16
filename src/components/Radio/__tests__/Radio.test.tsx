import React from 'react'
import { render, screen } from '@testing-library/react'
import { Radio } from '..'

describe('Radio Component', () => {
  it('should render the Radio component with default styles', () => {
    render(<Radio />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
    expect(radio).toHaveClass('appearance-none') // Default class
    expect(radio).toHaveClass('cursor-pointer') // Default class
    expect(radio).toHaveClass('min-w-5') // Default class
    expect(radio).toHaveClass('min-h-5') // Default class
    expect(radio).toHaveClass('bg-scaffold') // Default class
    expect(radio).toHaveClass('border') // Default class
    expect(radio).toHaveClass('border-default') // Default class
    expect(radio).toHaveClass('rounded-full') // Default class
  })

  it('should render the Radio component as an input of type radio', () => {
    render(<Radio />)

    const radio = screen.getByRole('radio')
    expect(radio).toHaveAttribute('type', 'radio') // Ensure it's a radio input
  })

  it('should apply the correct styles when checked', () => {
    render(<Radio defaultChecked />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeChecked() // Ensure the radio is checked
    expect(radio).toHaveClass('checked:before:absolute') // Checked state class
    expect(radio).toHaveClass('checked:before:-translate-y-1/2') // Checked state class
    expect(radio).toHaveClass('checked:before:-translate-x-1/2') // Checked state class
    expect(radio).toHaveClass('checked:before:top-1/2') // Checked state class
    expect(radio).toHaveClass('checked:before:left-1/2') // Checked state class
    expect(radio).toHaveClass("checked:before:content-['']") // Checked state class
    expect(radio).toHaveClass('checked:before:w-[0.6rem]') // Checked state class
    expect(radio).toHaveClass('checked:before:h-[0.6rem]') // Checked state class
    expect(radio).toHaveClass('checked:before:rounded-full') // Checked state class
    expect(radio).toHaveClass('checked:before:bg-contrast') // Checked state class
  })

  it('should apply the correct styles when disabled', () => {
    render(<Radio disabled />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled() // Ensure the radio is disabled
    expect(radio).toHaveClass('disabled:cursor-not-allowed') // Disabled state class
    expect(radio).toHaveClass('disabled:opacity-50') // Disabled state class
  })

  it('should merge custom class names with the base styles', () => {
    render(<Radio className="custom-class" />)

    const radio = screen.getByRole('radio')
    expect(radio).toHaveClass('custom-class') // Custom class
    expect(radio).toHaveClass('appearance-none') // Default class
  })
})
