import { render, screen } from '@testing-library/react'
import { Radio } from '..'

describe('Radio Component', () => {
  it('should render the Radio component with default styles', () => {
    render(<Radio />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
    expect(radio).toHaveClass('appearance-none')
    expect(radio).toHaveClass('cursor-pointer')
    expect(radio).toHaveClass('min-w-5')
    expect(radio).toHaveClass('min-h-5')
    expect(radio).toHaveClass('bg-scaffold')
    expect(radio).toHaveClass('border')
    expect(radio).toHaveClass('border-default')
    expect(radio).toHaveClass('rounded-full')
  })

  it('should render the Radio component as an input of type radio', () => {
    render(<Radio />)

    const radio = screen.getByRole('radio')
    expect(radio).toHaveAttribute('type', 'radio')
  })

  it('should apply the correct styles when checked', () => {
    render(<Radio defaultChecked />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeChecked()
    expect(radio).toHaveClass('checked:before:absolute')
    expect(radio).toHaveClass('checked:before:-translate-y-1/2')
    expect(radio).toHaveClass('checked:before:-translate-x-1/2')
    expect(radio).toHaveClass('checked:before:top-1/2')
    expect(radio).toHaveClass('checked:before:left-1/2')
    expect(radio).toHaveClass("checked:before:content-['']")
    expect(radio).toHaveClass('checked:before:w-[0.6rem]')
    expect(radio).toHaveClass('checked:before:h-[0.6rem]')
    expect(radio).toHaveClass('checked:before:rounded-full')
    expect(radio).toHaveClass('checked:before:bg-scaffold-contrast')
  })

  it('should apply the correct styles when disabled', () => {
    render(<Radio disabled />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled()
    expect(radio).toHaveClass('disabled:cursor-not-allowed')
    expect(radio).toHaveClass('disabled:opacity-50')
  })

  it('should merge custom class names with the base styles', () => {
    render(<Radio className="custom-class" />)

    const radio = screen.getByRole('radio')
    expect(radio).toHaveClass('custom-class')
    expect(radio).toHaveClass('appearance-none')
  })
})
