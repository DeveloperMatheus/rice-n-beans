import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '..'

describe('Button Component', () => {
  it('should render the Button component with default variant and size', () => {
    render(<Button>Default Button</Button>)

    const button = screen.getByRole('button', { name: 'Default Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary') // Default variant class
    expect(button).toHaveClass('h-9') // Default size class
    expect(button).toHaveClass('px-4') // Default size class
    expect(button).toHaveClass('py-2') // Default size class
  })

  it('should render the Button component with children', () => {
    render(<Button>Test Button</Button>)

    const button = screen.getByRole('button', { name: 'Test Button' })
    expect(button).toBeInTheDocument()
  })

  it('should apply the correct styles for the "destructive" variant', () => {
    render(<Button variant="destructive">Destructive Button</Button>)

    const button = screen.getByRole('button', { name: 'Destructive Button' })
    expect(button).toHaveClass('bg-error') // Destructive variant class
    expect(button).toHaveClass('text-white') // Destructive variant class
  })

  it('should apply the correct styles for the "outline" variant', () => {
    render(<Button variant="outline">Outline Button</Button>)

    const button = screen.getByRole('button', { name: 'Outline Button' })
    expect(button).toHaveClass('border') // Outline variant class
    expect(button).toHaveClass('border-default') // Outline variant class
    expect(button).toHaveClass('text-contrast') // Outline variant class
  })

  it('should apply the correct styles for the "secondary" variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>)

    const button = screen.getByRole('button', { name: 'Secondary Button' })
    expect(button).toHaveClass('bg-secondary') // Secondary variant class
    expect(button).toHaveClass('text-contrast') // Secondary variant class
  })

  it('should apply the correct styles for the "ghost" variant', () => {
    render(<Button variant="ghost">Ghost Button</Button>)

    const button = screen.getByRole('button', { name: 'Ghost Button' })
    expect(button).toHaveClass('bg-transparent') // Ghost variant class
    expect(button).toHaveClass('text-contrast') // Ghost variant class
  })

  it('should apply the correct styles for the "link" variant', () => {
    render(<Button variant="link">Link Button</Button>)

    const button = screen.getByRole('button', { name: 'Link Button' })
    expect(button).toHaveClass('text-contrast') // Link variant class
    expect(button).toHaveClass('underline-offset-4') // Link variant class
  })

  it('should apply the correct styles for the "sm" size', () => {
    render(<Button size="sm">Small Button</Button>)

    const button = screen.getByRole('button', { name: 'Small Button' })
    expect(button).toHaveClass('h-8') // Small size class
    expect(button).toHaveClass('px-3') // Small size class
    expect(button).toHaveClass('text-xs') // Small size class
  })

  it('should apply the correct styles for the "lg" size', () => {
    render(<Button size="lg">Large Button</Button>)

    const button = screen.getByRole('button', { name: 'Large Button' })
    expect(button).toHaveClass('h-10') // Large size class
    expect(button).toHaveClass('px-8') // Large size class
  })

  it('should apply the correct styles for the "icon" size', () => {
    render(<Button size="icon">Icon Button</Button>)

    const button = screen.getByRole('button', { name: 'Icon Button' })
    expect(button).toHaveClass('h-9') // Icon size class
    expect(button).toHaveClass('w-9') // Icon size class
  })

  it('should apply the correct styles when disabled', () => {
    render(<Button disabled>Disabled Button</Button>)

    const button = screen.getByRole('button', { name: 'Disabled Button' })
    expect(button).toBeDisabled() // Check if the button is disabled
    expect(button).toHaveClass('disabled:cursor-not-allowed') // Disabled state class
    expect(button).toHaveClass('disabled:opacity-50') // Disabled state class
  })

  it('should merge custom class names with the base styles', () => {
    render(<Button className="custom-class">Custom Class Button</Button>)

    const button = screen.getByRole('button', { name: 'Custom Class Button' })
    expect(button).toHaveClass('custom-class') // Custom class
    expect(button).toHaveClass('bg-primary') // Default variant class
  })
})
