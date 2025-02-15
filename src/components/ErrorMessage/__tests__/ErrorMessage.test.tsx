import React from 'react'
import { render, screen } from '@testing-library/react'
import { ErrorMessage } from '..'

describe('ErrorMessage Component', () => {
  it('should render the ErrorMessage component with default styles', () => {
    render(<ErrorMessage>Test Error</ErrorMessage>)

    const errorMessage = screen.getByText('Test Error')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveClass('text-error') // Default text color
    expect(errorMessage).toHaveClass('font-sans') // Default font family
  })

  it('should render the ErrorMessage component with children', () => {
    render(<ErrorMessage>Test Error</ErrorMessage>)

    const errorMessage = screen.getByText('Test Error')
    expect(errorMessage).toBeInTheDocument()
  })

  it('should merge custom class names with the base styles', () => {
    render(
      <ErrorMessage className="custom-class">Custom Class Error</ErrorMessage>
    )

    const errorMessage = screen.getByText('Custom Class Error')
    expect(errorMessage).toHaveClass('custom-class') // Custom class
    expect(errorMessage).toHaveClass('text-error') // Default text color
  })
})
