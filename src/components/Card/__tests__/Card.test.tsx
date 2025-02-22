import { render, screen } from '@testing-library/react'
import { Card } from '..'

describe('Card Component', () => {
  it('should render the Card component with default styles', () => {
    render(<Card>Card Content</Card>)

    const card = screen.getByText('Card Content')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('bg-scaffold')
    expect(card).toHaveClass('border')
    expect(card).toHaveClass('border-default')
    expect(card).toHaveClass('rounded-lg')
    expect(card).toHaveClass('p-3')
    expect(card).toHaveClass('shadow-xs')
  })

  it('should render the Card component with children', () => {
    render(<Card>Test Card</Card>)

    const card = screen.getByText('Test Card')
    expect(card).toBeInTheDocument()
  })

  it('should merge custom class names with the base styles', () => {
    render(<Card className="custom-class">Custom Class Card</Card>)

    const card = screen.getByText('Custom Class Card')
    expect(card).toHaveClass('custom-class')
    expect(card).toHaveClass('bg-scaffold')
    expect(card).toHaveClass('border')
  })
})
