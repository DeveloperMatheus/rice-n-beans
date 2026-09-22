import { render, screen } from '@testing-library/react'
import { Label } from '..'

describe('Label Component', () => {
  it('should render the Label component with default styles', () => {
    render(<Label>Test Label</Label>)

    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass('inline-block')
    expect(label).toHaveClass('text-scaffold-contrast')
    expect(label).toHaveClass('font-bold')
    expect(label).toHaveClass('select-none')
  })

  it('should render the Label component with children', () => {
    render(<Label>Test Label</Label>)

    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  it('should merge custom class names with the base styles', () => {
    render(<Label className="custom-class">Custom Class Label</Label>)

    const label = screen.getByText('Custom Class Label')
    expect(label).toHaveClass('custom-class')
  })
})
