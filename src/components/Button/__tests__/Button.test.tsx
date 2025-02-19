import { render, screen } from '@testing-library/react'
import { Button } from '..'

describe('Button Component', () => {
  it('should render the Button component with default variant and size', () => {
    render(<Button>Default Button</Button>)

    const button = screen.getByRole('button', { name: 'Default Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
    expect(button).toHaveClass('text-primary-contrast')
    expect(button).toHaveClass('h-9')
    expect(button).toHaveClass('px-4')
    expect(button).toHaveClass('py-2')
  })

  it('should render the Button component with children', () => {
    render(<Button>Test Button</Button>)

    const button = screen.getByRole('button', { name: 'Test Button' })
    expect(button).toBeInTheDocument()
  })

  it('should apply the correct styles for the "success" variant', () => {
    render(<Button variant="success">Success Button</Button>)

    const button = screen.getByRole('button', { name: 'Success Button' })
    expect(button).toHaveClass('bg-success')
    expect(button).toHaveClass('text-success-contrast')
  })

  it('should apply the correct styles for the "destructive" variant', () => {
    render(<Button variant="destructive">Destructive Button</Button>)

    const button = screen.getByRole('button', { name: 'Destructive Button' })
    expect(button).toHaveClass('bg-error')
    expect(button).toHaveClass('text-error-contrast')
  })

  it('should apply the correct styles for the "outline" variant', () => {
    render(<Button variant="outline">Outline Button</Button>)

    const button = screen.getByRole('button', { name: 'Outline Button' })
    expect(button).toHaveClass('border')
    expect(button).toHaveClass('border-default')
    expect(button).toHaveClass('text-contrast')
  })

  it('should apply the correct styles for the "secondary" variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>)

    const button = screen.getByRole('button', { name: 'Secondary Button' })
    expect(button).toHaveClass('bg-secondary')
    expect(button).toHaveClass('text-secondary-contrast')
  })

  it('should apply the correct styles for the "ghost" variant', () => {
    render(<Button variant="ghost">Ghost Button</Button>)

    const button = screen.getByRole('button', { name: 'Ghost Button' })
    expect(button).toHaveClass('bg-transparent')
    expect(button).toHaveClass('text-contrast')
  })

  it('should apply the correct styles for the "link" variant', () => {
    render(<Button variant="link">Link Button</Button>)

    const button = screen.getByRole('button', { name: 'Link Button' })
    expect(button).toHaveClass('text-contrast')
    expect(button).toHaveClass('underline-offset-4')
  })

  it('should apply the correct styles for the "sm" size', () => {
    render(<Button size="sm">Small Button</Button>)

    const button = screen.getByRole('button', { name: 'Small Button' })
    expect(button).toHaveClass('h-8')
    expect(button).toHaveClass('px-3')
    expect(button).toHaveClass('text-xs')
  })

  it('should apply the correct styles for the "lg" size', () => {
    render(<Button size="lg">Large Button</Button>)

    const button = screen.getByRole('button', { name: 'Large Button' })
    expect(button).toHaveClass('h-10')
    expect(button).toHaveClass('px-8')
  })

  it('should apply the correct styles for the "icon" size', () => {
    render(<Button size="icon">Icon Button</Button>)

    const button = screen.getByRole('button', { name: 'Icon Button' })
    expect(button).toHaveClass('h-9')
    expect(button).toHaveClass('w-9')
  })

  it('should apply the correct styles when disabled', () => {
    render(<Button disabled>Disabled Button</Button>)

    const button = screen.getByRole('button', { name: 'Disabled Button' })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:cursor-not-allowed')
    expect(button).toHaveClass('disabled:opacity-50')
  })

  it('should merge custom class names with the base styles', () => {
    render(<Button className="custom-class">Custom Class Button</Button>)

    const button = screen.getByRole('button', { name: 'Custom Class Button' })
    expect(button).toHaveClass('custom-class')
    expect(button).toHaveClass('bg-primary')
  })
})
