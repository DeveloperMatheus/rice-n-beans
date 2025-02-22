import { render, screen, fireEvent } from '@testing-library/react'
import { Modal, ModalContent, ModalHeader, ModalFooter } from '..'

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn(function () {
    this.open = true
  })
  HTMLDialogElement.prototype.close = jest.fn(function () {
    this.open = false
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

    const modal = screen.getByRole('dialog', { hidden: true })
    expect(modal).toHaveProperty('open', true)
    expect(modal).toHaveClass('rounded-lg')
    expect(modal).toHaveClass('open:animate-modal')
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
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
    fireEvent.click(modal)
    expect(onCloseModal).toHaveBeenCalled()
  })

  it('should close the modal when isOpen changes to false', () => {
    const onCloseModal = jest.fn()
    const { rerender } = render(
      <Modal isOpen={true} onCloseModal={onCloseModal}>
        <ModalContent>Modal Content</ModalContent>
      </Modal>
    )

    const modal = screen.getByRole('dialog', { hidden: true })
    expect(modal).toHaveProperty('open', true)

    rerender(
      <Modal isOpen={false} onCloseModal={onCloseModal}>
        <ModalContent>Modal Content</ModalContent>
      </Modal>
    )

    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled()
    expect(modal).toHaveProperty('open', false)
  })
})

describe('ModalContent Component', () => {
  it('should render the ModalContent component with default styles', () => {
    render(<ModalContent>Modal Content</ModalContent>)

    const content = screen.getByText('Modal Content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('px-3')
    expect(content).toHaveClass('pb-3')
  })

  it('should merge custom class names with the base styles', () => {
    render(
      <ModalContent className="custom-class">Custom Class Content</ModalContent>
    )

    const content = screen.getByText('Custom Class Content')
    expect(content).toHaveClass('custom-class')
    expect(content).toHaveClass('px-3')
  })
})

describe('ModalHeader Component', () => {
  it('should render the ModalHeader component with default styles', () => {
    render(<ModalHeader>Modal Header</ModalHeader>)

    const header = screen.getByText('Modal Header')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('px-3')
    expect(header).toHaveClass('pt-3')
  })

  it('should merge custom class names with the base styles', () => {
    render(
      <ModalHeader className="custom-class">Custom Class Header</ModalHeader>
    )

    const header = screen.getByText('Custom Class Header')
    expect(header).toHaveClass('custom-class')
    expect(header).toHaveClass('px-3')
  })
})

describe('ModalFooter Component', () => {
  it('should render the ModalFooter component with default styles', () => {
    render(<ModalFooter>Modal Footer</ModalFooter>)

    const footer = screen.getByText('Modal Footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('border-t')
    expect(footer).toHaveClass('border-default')
    expect(footer).toHaveClass('p-3')
  })

  it('should merge custom class names with the base styles', () => {
    render(
      <ModalFooter className="custom-class">Custom Class Footer</ModalFooter>
    )

    const footer = screen.getByText('Custom Class Footer')
    expect(footer).toHaveClass('custom-class')
    expect(footer).toHaveClass('p-3')
  })
})
