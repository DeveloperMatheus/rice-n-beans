import React from 'react'
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
  // --- Base Component ---
  it('should render the Base component with default orientation (left)', () => {
    render(<Base>Base Content</Base>)

    const base = screen.getByText('Base Content')
    expect(base).toBeInTheDocument()
    expect(base).toHaveClass('flex') // Base styles
    expect(base).toHaveClass('flex-row') // Default orientation
  })

  it('should render the Base component with "right" orientation', () => {
    render(<Base orientation="right">Base Content</Base>)

    const base = screen.getByText('Base Content')
    expect(base).toHaveClass('flex-row-reverse') // Right orientation
  })

  // --- BaseContainer Component ---
  it('should render the BaseContainer component', () => {
    render(<BaseContainer>Container Content</BaseContainer>)

    const container = screen.getByText('Container Content')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('h-screen') // Base container styles
    expect(container).toHaveClass('w-full')
  })

  // --- BaseContent Component ---
  it('should render the BaseContent component', () => {
    render(<BaseContent>Content</BaseContent>)

    const content = screen.getByText('Content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('bg-scaffold') // Base content styles
    expect(content).toHaveClass('p-3')
  })

  // --- BaseDrawer Component ---
  it('should render the BaseDrawer component when isOpen is true', () => {
    render(<BaseDrawer isOpen={true}>Drawer Content</BaseDrawer>)

    const drawer = screen.getByText('Drawer Content')
    expect(drawer).toBeInTheDocument()
    expect(drawer).toHaveClass('w-full') // Open drawer styles
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

  // --- BaseHeader Component ---
  it('should render the BaseHeader component', () => {
    render(<BaseHeader>Header Content</BaseHeader>)

    const header = screen.getByText('Header Content')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('bg-scaffold') // Base header styles
    expect(header).toHaveClass('sticky')
  })

  // --- BaseToggleDrawer Component ---
  it('should render the BaseToggleDrawer component with the Menu icon', () => {
    render(<BaseToggleDrawer />)

    // Check if the button is rendered
    const toggleButton = screen.getByRole('button')
    expect(toggleButton).toBeInTheDocument()

    // Check if the Menu icon (svg) is rendered inside the button
    const menuIcon = toggleButton.querySelector('svg') // Find the svg element inside the button
    expect(menuIcon).toBeInTheDocument()

    // Check if the svg has the correct class
    expect(menuIcon).toHaveClass('lucide') // Check for the lucide class
    expect(menuIcon).toHaveClass('lucide-menu') // Check for the lucide-menu class
  })
})
