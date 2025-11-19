import { render, screen, fireEvent, renderHook } from '@testing-library/react'
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
        console.log(result)
      }

      return <Button onClick={handleClick}>Open Dialog</Button>
    }

    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>
    )

    fireEvent.click(screen.getByText('Open Dialog'))

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
        console.log(result)
      }

      return <Button onClick={handleClick}>Open Dialog</Button>
    }

    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>
    )

    fireEvent.click(screen.getByText('Open Dialog'))

    const confirmButton = await screen.findByText('Confirm')
    fireEvent.click(confirmButton)

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
        console.log(result)
      }

      return <Button onClick={handleClick}>Open Dialog</Button>
    }

    render(
      <DialogProvider>
        <TestComponent />
      </DialogProvider>
    )

    fireEvent.click(screen.getByText('Open Dialog'))

    const cancelButton = await screen.findByText('Cancel')
    fireEvent.click(cancelButton)

    expect(screen.queryByText('Test Header')).not.toBeInTheDocument()
  })

  it('should throw error when used without provider', () => {
    expect(() => {
      renderHook(() => useConfirm())
    }).toThrow('useConfirm must be used inside an DialogProvider')
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

    expect(screen.getByText('Are you sure?')).toBeInTheDocument()
    expect(
      screen.getByText('This action cannot be undone.')
    ).toBeInTheDocument()
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

    expect(screen.getByText('Custom Header')).toBeInTheDocument()
    expect(screen.getByText('Custom Content')).toBeInTheDocument()
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

    fireEvent.click(screen.getByText('Confirm'))

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

    fireEvent.click(screen.getByText('Cancel'))

    expect(handleAction).toHaveBeenCalledWith(false)
  })
})
