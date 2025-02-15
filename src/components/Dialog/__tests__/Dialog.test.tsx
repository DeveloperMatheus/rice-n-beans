import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { DialogProvider, useConfirm, DialogModal } from '..'
import { Button } from '~/components/Button'

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn()
  HTMLDialogElement.prototype.close = jest.fn()
})

describe('DialogProvider and useConfirm Hook', () => {
  it('should render children and open DialogModal when getConfirmation is called', async () => {
    const TestComponent = () => {
      const { getConfirmation } = useConfirm()

      const handleClick = async () => {
        const result = await getConfirmation({
          header: 'Test Header',
          content: 'Test Content'
        })
        console.log(result) // For testing purposes
      }

      return <Button onClick={handleClick}>Open Dialog</Button>
    }

    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>
    )

    // Click the button to open the dialog
    fireEvent.click(screen.getByText('Open Dialog'))

    // Check if the DialogModal is rendered
    const dialogHeader = await screen.findByText('Test Header')
    expect(dialogHeader).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should close the DialogModal and resolve the promise when Confirm is clicked', async () => {
    const TestComponent = () => {
      const { getConfirmation } = useConfirm()

      const handleClick = async () => {
        const result = await getConfirmation({
          header: 'Test Header',
          content: 'Test Content'
        })
        console.log(result) // For testing purposes
      }

      return <Button onClick={handleClick}>Open Dialog</Button>
    }

    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>
    )

    // Click the button to open the dialog
    fireEvent.click(screen.getByText('Open Dialog'))

    // Click the Confirm button
    const confirmButton = await screen.findByText('Confirm')
    fireEvent.click(confirmButton)

    // Check if the DialogModal is closed
    expect(screen.queryByText('Test Header')).not.toBeInTheDocument()
  })

  it('should close the DialogModal and resolve the promise when Cancel is clicked', async () => {
    const TestComponent = () => {
      const { getConfirmation } = useConfirm()

      const handleClick = async () => {
        const result = await getConfirmation({
          header: 'Test Header',
          content: 'Test Content'
        })
        console.log(result) // For testing purposes
      }

      return <Button onClick={handleClick}>Open Dialog</Button>
    }

    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>
    )

    // Click the button to open the dialog
    fireEvent.click(screen.getByText('Open Dialog'))

    // Click the Cancel button
    const cancelButton = await screen.findByText('Cancel')
    fireEvent.click(cancelButton)

    // Check if the DialogModal is closed
    expect(screen.queryByText('Test Header')).not.toBeInTheDocument()
  })
})

describe('DialogModal Component', () => {
  it('should render the DialogModal with default props', () => {
    render(
      <DialogModal
        open={true}
        handleAction={jest.fn()}
        header="Are you sure?"
        content="This action cannot be undone."
        rejectText="Cancel"
        confirmText="Confirm"
      />
    )

    // Check if the default header and content are rendered
    expect(screen.getByText('Are you sure?')).toBeInTheDocument()
    expect(
      screen.getByText('This action cannot be undone.')
    ).toBeInTheDocument()

    // Check if the default buttons are rendered
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Confirm')).toBeInTheDocument()
  })

  it('should render the DialogModal with custom props', () => {
    render(
      <DialogModal
        open={true}
        handleAction={jest.fn()}
        header="Custom Header"
        content="Custom Content"
        rejectText="No"
        confirmText="Yes"
      />
    )

    // Check if the custom header and content are rendered
    expect(screen.getByText('Custom Header')).toBeInTheDocument()
    expect(screen.getByText('Custom Content')).toBeInTheDocument()

    // Check if the custom buttons are rendered
    expect(screen.getByText('No')).toBeInTheDocument()
    expect(screen.getByText('Yes')).toBeInTheDocument()
  })

  it('should call handleAction with true when Confirm is clicked', () => {
    const handleAction = jest.fn()
    render(
      <DialogModal
        open={true}
        handleAction={handleAction}
        header="Are you sure?"
        content="This action cannot be undone."
        rejectText="Cancel"
        confirmText="Confirm"
      />
    )

    // Click the Confirm button
    fireEvent.click(screen.getByText('Confirm'))

    // Check if handleAction was called with true
    expect(handleAction).toHaveBeenCalledWith(true)
  })

  it('should call handleAction with false when Cancel is clicked', () => {
    const handleAction = jest.fn()
    render(
      <DialogModal
        open={true}
        handleAction={handleAction}
        header="Are you sure?"
        content="This action cannot be undone."
        rejectText="Cancel"
        confirmText="Confirm"
      />
    )

    // Click the Cancel button
    fireEvent.click(screen.getByText('Cancel'))

    // Check if handleAction was called with false
    expect(handleAction).toHaveBeenCalledWith(false)
  })
})
