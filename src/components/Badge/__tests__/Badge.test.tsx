import { render, screen } from '@testing-library/react'
import { Badge } from '..'

describe('Badge Component', () => {
  it('should render the Badge component with default variant', () => {
    render(<Badge>Default Badge</Badge>)

    const badge = screen.getByText('Default Badge')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-primary') // Default variant class
    expect(badge).toHaveClass('text-primary-contrast') // Default variant class
    expect(badge).toHaveClass('px-2.5 py-0.5') // Base styles
  })

  it('should render the Badge component with children', () => {
    render(<Badge>Test Badge</Badge>)

    const badge = screen.getByText('Test Badge')
    expect(badge).toBeInTheDocument()
  })

  it('should apply the correct styles for the "success" variant', () => {
    render(<Badge variant="success">Success Badge</Badge>)

    const badge = screen.getByText('Success Badge')
    expect(badge).toHaveClass('bg-success')
    expect(badge).toHaveClass('text-success-contrast')
  })

  it('should apply the correct styles for the "destructive" variant', () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>)

    const badge = screen.getByText('Destructive Badge')
    expect(badge).toHaveClass('bg-error')
    expect(badge).toHaveClass('text-error-contrast')
  })

  it('should apply the correct styles for the "outline" variant', () => {
    render(<Badge variant="outline">Outline Badge</Badge>)

    const badge = screen.getByText('Outline Badge')
    expect(badge).toHaveClass('border')
    expect(badge).toHaveClass('border-default')
    expect(badge).toHaveClass('text-scaffold-contrast')
  })

  it('should apply the correct styles for the "secondary" variant', () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>)

    const badge = screen.getByText('Secondary Badge')
    expect(badge).toHaveClass('bg-secondary')
    expect(badge).toHaveClass('text-secondary-contrast')
  })

  it('should merge custom class names with the base styles', () => {
    render(<Badge className="custom-class">Custom Class Badge</Badge>)

    const badge = screen.getByText('Custom Class Badge')
    expect(badge).toHaveClass('custom-class')
    expect(badge).toHaveClass('px-2.5 py-0.5')
  })

  it('should have the correct accessibility attributes', () => {
    render(<Badge role="status">Accessible Badge</Badge>)

    const badge = screen.getByText('Accessible Badge')
    expect(badge).toHaveAttribute('role', 'status')
  })
})
