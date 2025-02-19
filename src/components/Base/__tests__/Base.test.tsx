import { render, screen } from '@testing-library/react'
import {
  Base,
  BaseContainer,
  BaseContent,
  BaseDrawer,
  BaseHeader,
  BaseToggleDrawer
} from '..'

describe('Base Components', () => {
  it('should render the Base component with default orientation (left)', () => {
    render(<Base>Base Content</Base>)

    const base = screen.getByText('Base Content')
    expect(base).toBeInTheDocument()
    expect(base).toHaveClass('flex')
    expect(base).toHaveClass('flex-row')
  })

  it('should render the Base component with "right" orientation', () => {
    render(<Base orientation="right">Base Content</Base>)

    const base = screen.getByText('Base Content')
    expect(base).toHaveClass('flex-row-reverse')
  })

  it('should render the BaseContainer component', () => {
    render(<BaseContainer>Container Content</BaseContainer>)

    const container = screen.getByText('Container Content')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('h-screen')
    expect(container).toHaveClass('w-full')
  })

  it('should render the BaseContent component', () => {
    render(<BaseContent>Content</BaseContent>)

    const content = screen.getByText('Content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('bg-scaffold')
    expect(content).toHaveClass('p-3')
  })

  it('should render the BaseDrawer component when isOpen is true', () => {
    render(<BaseDrawer isOpen={true}>Drawer Content</BaseDrawer>)

    const drawer = screen.getByText('Drawer Content')
    expect(drawer).toBeInTheDocument()
    expect(drawer).toHaveClass('w-full')
    expect(drawer).toHaveClass('lg:w-72')
  })

  it('should render the BaseDrawer component when isOpen is false', () => {
    render(<BaseDrawer isOpen={false}>Drawer Content</BaseDrawer>)

    const drawer = screen.getByText('Drawer Content')
    expect(drawer).toBeInTheDocument()
    expect(drawer).toHaveClass('hidden') // Closed drawer styles
    expect(drawer).toHaveClass('lg:block')
    expect(drawer).toHaveClass('lg:w-14')
  })

  it('should render the BaseHeader component', () => {
    render(<BaseHeader>Header Content</BaseHeader>)

    const header = screen.getByText('Header Content')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('bg-scaffold') // Base header styles
    expect(header).toHaveClass('sticky')
  })

  it('should render the BaseToggleDrawer component with the Menu icon', () => {
    render(<BaseToggleDrawer />)

    const toggleButton = screen.getByRole('button')
    expect(toggleButton).toBeInTheDocument()

    const menuIcon = toggleButton.querySelector('svg')
    expect(menuIcon).toBeInTheDocument()

    expect(menuIcon).toHaveClass('lucide')
    expect(menuIcon).toHaveClass('lucide-menu')
  })
})
