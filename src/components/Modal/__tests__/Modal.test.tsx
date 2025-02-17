import { render, screen, fireEvent } from '@testing-library/react'
import { Modal, ModalContent, ModalHeader, ModalFooter } from '..'

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn(function () {
    this.open = true // Set the open property to true
  })
  HTMLDialogElement.prototype.close = jest.fn(function () {
    this.open = false // Set the open property to false
  })
})

describe('Modal Component', () => {
  it('should render the Modal component when isOpen is true', () => {
    const onCloseModal = jest.fn()
    render(
      <Modal isOpen={true} onCloseModal={onCloseModal}>
        <ModalContent>Modal Content</ModalContent>
      </Modal>
    )

    const modal = screen.getByRole('dialog', { hidden: true }) // Use { hidden: true } to find the dialog
    expect(modal).toHaveProperty('open', true)
    expect(modal).toHaveClass('rounded-lg') // Default modal styles
    expect(modal).toHaveClass('open:animate-modal') // Default modal styles
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled() // Ensure showModal was called
  })

  it('should not render the Modal component when isOpen is false', () => {
    const onCloseModal = jest.fn()
    render(
      <Modal isOpen={false} onCloseModal={onCloseModal}>
        <ModalContent>Modal Content</ModalContent>
      </Modal>
    )

    const modal = screen.queryByRole('dialog', { hidden: true })
    expect(modal).toHaveProperty('open', false)
  })

  it('should call onCloseModal when clicking outside the modal', () => {
    const onCloseModal = jest.fn()
    render(
      <Modal isOpen={true} onCloseModal={onCloseModal}>
        <ModalContent>Modal Content</ModalContent>
      </Modal>
    )

    const modal = screen.getByRole('dialog', { hidden: true })
    fireEvent.click(modal) // Simulate clicking outside the modal
    expect(onCloseModal).toHaveBeenCalled()
  })

  it('should close the modal when isOpen changes to false', () => {
    const onCloseModal = jest.fn()
    const { rerender } = render(
      <Modal isOpen={true} onCloseModal={onCloseModal}>
        <ModalContent>Modal Content</ModalContent>
      </Modal>
    )

    // Initially, the modal should be open
    const modal = screen.getByRole('dialog', { hidden: true })
    expect(modal).toHaveProperty('open', true)

    // Rerender with isOpen set to false
    rerender(
      <Modal isOpen={false} onCloseModal={onCloseModal}>
        <ModalContent>Modal Content</ModalContent>
      </Modal>
    )

    // The modal should no longer be in the document
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled() // Ensure close was called
    expect(modal).toHaveProperty('open', false)
  })
})

describe('ModalContent Component', () => {
  it('should render the ModalContent component with default styles', () => {
    render(<ModalContent>Modal Content</ModalContent>)

    const content = screen.getByText('Modal Content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('px-3') // Default padding
    expect(content).toHaveClass('pb-3') // Default padding
  })

  it('should merge custom class names with the base styles', () => {
    render(
      <ModalContent className="custom-class">Custom Class Content</ModalContent>
    )

    const content = screen.getByText('Custom Class Content')
    expect(content).toHaveClass('custom-class') // Custom class
    expect(content).toHaveClass('px-3') // Default padding
  })
})

describe('ModalHeader Component', () => {
  it('should render the ModalHeader component with default styles', () => {
    render(<ModalHeader>Modal Header</ModalHeader>)

    const header = screen.getByText('Modal Header')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('px-3') // Default padding
    expect(header).toHaveClass('pt-3') // Default padding
  })

  it('should merge custom class names with the base styles', () => {
    render(
      <ModalHeader className="custom-class">Custom Class Header</ModalHeader>
    )

    const header = screen.getByText('Custom Class Header')
    expect(header).toHaveClass('custom-class') // Custom class
    expect(header).toHaveClass('px-3') // Default padding
  })
})

describe('ModalFooter Component', () => {
  it('should render the ModalFooter component with default styles', () => {
    render(<ModalFooter>Modal Footer</ModalFooter>)

    const footer = screen.getByText('Modal Footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('border-t') // Default border
    expect(footer).toHaveClass('border-default') // Default border color
    expect(footer).toHaveClass('p-3') // Default padding
  })

  it('should merge custom class names with the base styles', () => {
    render(
      <ModalFooter className="custom-class">Custom Class Footer</ModalFooter>
    )

    const footer = screen.getByText('Custom Class Footer')
    expect(footer).toHaveClass('custom-class') // Custom class
    expect(footer).toHaveClass('p-3') // Default padding
  })
})
