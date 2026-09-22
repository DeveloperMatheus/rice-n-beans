import { render, screen } from '@testing-library/react'
import { Text } from '..'

describe('Text Component', () => {
  it('renders the correct HTML tag based on the "tag" prop', () => {
    render(<Text tag="h1">Heading 1</Text>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    render(<Text tag="p">Paragraph</Text>)
    expect(screen.getByText('Paragraph').tagName).toBe('P')

    render(<Text tag="span">Span</Text>)
    expect(screen.getByText('Span').tagName).toBe('SPAN')
  })

  it('uses default props when no props are provided', () => {
    render(<Text>Default Text</Text>)
    const defaultElement = screen.getByText('Default Text')
    expect(defaultElement.tagName).toBe('P')
    expect(defaultElement).toHaveClass(
      'text-sm',
      'lg:text-base',
      'font-normal',
      'text-scaffold-contrast'
    )
  })

  it('merges custom className with the default styles', () => {
    render(
      <Text className="custom-class" tag="h2">
        Heading 2
      </Text>
    )
    const h2Element = screen.getByText('Heading 2')
    expect(h2Element).toHaveClass(
      'custom-class',
      'text-2xl',
      'lg:text-3xl',
      'font-bold',
      'text-scaffold-contrast'
    )
  })
})
