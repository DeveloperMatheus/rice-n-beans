import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '..'

describe('Card Component', () => {
  it('should render the Card component with default styles', () => {
    render(<Card>Card Content</Card>)

    const card = screen.getByText('Card Content')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('bg-accent') // Default background color
    expect(card).toHaveClass('border') // Default border
    expect(card).toHaveClass('border-default') // Default border color
    expect(card).toHaveClass('rounded-lg') // Default border radius
    expect(card).toHaveClass('p-3') // Default padding
    expect(card).toHaveClass('shadow-xs') // Default shadow
  })

  it('should render the Card component with children', () => {
    render(<Card>Test Card</Card>)

    const card = screen.getByText('Test Card')
    expect(card).toBeInTheDocument()
  })

  it('should merge custom class names with the base styles', () => {
    render(<Card className="custom-class">Custom Class Card</Card>)

    const card = screen.getByText('Custom Class Card')
    expect(card).toHaveClass('custom-class') // Custom class
    expect(card).toHaveClass('bg-accent') // Default background color
    expect(card).toHaveClass('border') // Default border
  })
})
