import {
  render,
  screen,
  fireEvent,
  renderHook,
  waitFor
} from '@testing-library/react'
import { useState } from 'react'
import { DialogProvider, useConfirm, DialogModal } from '..'
import type { DialogProps } from '..'
import { Button } from '~/components/button'

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn(function (
    this: HTMLDialogElement
  ) {
    this.setAttribute('open', '')
  })
  HTMLDialogElement.prototype.close = jest.fn(function (
    this: HTMLDialogElement
  ) {
    this.removeAttribute('open')
  })
})

/* --- Test helpers --- */
const fireNativeClose = (dialog: HTMLElement) =>
  fireEvent(dialog, new Event('close'))

type HarnessProps = {
  options?: DialogProps
  onResult: (result: boolean, label: string) => void
}

const Harness = ({ options, onResult }: HarnessProps) => {
  const { getConfirmation } = useConfirm()

  const ask = async (label: string) => {
    const result = await getConfirmation({
      header: 'Test Header',
      content: 'Test Content',
      ...options
    })
    onResult(result, label)
  }

  return (
    <>
      <Button onClick={() => ask('A')}>Open Dialog</Button>
      <Button
        onClick={() => {
          ask('A')
          ask('B')
        }}
      >
        Open Twice
      </Button>
    </>
  )
}

const setup = (options?: DialogProps) => {
  const onResult = jest.fn()

  const utils = render(
    <DialogProvider>
      <Harness options={options} onResult={onResult} />
    </DialogProvider>
  )

  return { onResult, ...utils }
}

describe('DialogProvider and useConfirm Hook', () => {
  it('should render children and open DialogModal when getConfirmation is called', async () => {
    setup()

    expect(screen.queryByText('Test Header')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Open Dialog'))

    expect(await screen.findByText('Test Header')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
  })

  it('should close the DialogModal and resolve with true when Confirm is clicked', async () => {
    const { onResult } = setup()

    fireEvent.click(screen.getByText('Open Dialog'))
    fireEvent.click(await screen.findByText('Confirm'))

    await waitFor(() => expect(onResult).toHaveBeenCalledWith(true, 'A'))
    expect(screen.queryByText('Test Header')).not.toBeInTheDocument()
  })

  it('should close the DialogModal and resolve with false when Cancel is clicked', async () => {
    const { onResult } = setup()

    fireEvent.click(screen.getByText('Open Dialog'))
    fireEvent.click(await screen.findByText('Cancel'))

    await waitFor(() => expect(onResult).toHaveBeenCalledWith(false, 'A'))
    expect(screen.queryByText('Test Header')).not.toBeInTheDocument()
  })

  it('should use custom button texts', async () => {
    setup({ confirmText: 'Of Course :)', rejectText: 'No :(' })

    fireEvent.click(screen.getByText('Open Dialog'))

    expect(await screen.findByText('Of Course :)')).toBeInTheDocument()
    expect(screen.getByText('No :(')).toBeInTheDocument()
  })

  it('should resolve with false when the dialog is dismissed natively (Escape)', async () => {
    const { onResult } = setup()

    fireEvent.click(screen.getByText('Open Dialog'))

    const dialog = await screen.findByRole('dialog')
    fireNativeClose(dialog)

    await waitFor(() => expect(onResult).toHaveBeenCalledWith(false, 'A'))
    expect(screen.queryByText('Test Header')).not.toBeInTheDocument()
  })

  it('should resolve only once when a dismissal and a button click both fire', async () => {
    const { onResult } = setup()

    fireEvent.click(screen.getByText('Open Dialog'))

    const dialog = await screen.findByRole('dialog')
    const confirm = screen.getByText('Confirm')

    fireEvent.click(confirm)
    fireNativeClose(dialog) // e.g. native close event after the click

    await waitFor(() => expect(onResult).toHaveBeenCalledTimes(1))
    expect(onResult).toHaveBeenCalledWith(true, 'A')
  })

  it('should resolve the first promise with false when a second call replaces it', async () => {
    const { onResult } = setup()

    fireEvent.click(screen.getByText('Open Twice'))

    await waitFor(() => expect(onResult).toHaveBeenCalledWith(false, 'A'))
    expect(onResult).toHaveBeenCalledTimes(1)

    fireEvent.click(await screen.findByText('Confirm'))

    await waitFor(() => expect(onResult).toHaveBeenCalledWith(true, 'B'))
    expect(onResult).toHaveBeenCalledTimes(2)
  })

  it('should resolve a pending promise with false when the provider unmounts', async () => {
    const { onResult, unmount } = setup()

    fireEvent.click(screen.getByText('Open Dialog'))
    await screen.findByText('Test Header')

    unmount()

    await waitFor(() => expect(onResult).toHaveBeenCalledWith(false, 'A'))
  })

  it('should return focus to the trigger after the dialog closes', async () => {
    setup()

    const trigger = screen.getByText('Open Dialog')
    trigger.focus()
    expect(trigger).toHaveFocus()

    fireEvent.click(trigger)
    fireEvent.click(await screen.findByText('Confirm'))

    await waitFor(() =>
      expect(screen.queryByText('Test Header')).not.toBeInTheDocument()
    )
    expect(trigger).toHaveFocus()
  })

  it('should keep the original trigger when a second call replaces the first', async () => {
    setup()

    const trigger = screen.getByText('Open Twice')
    trigger.focus()

    fireEvent.click(trigger)

    const cancel = await screen.findByText('Cancel')
    cancel.focus()

    fireEvent.click(cancel)

    await waitFor(() =>
      expect(screen.queryByText('Test Header')).not.toBeInTheDocument()
    )
    expect(trigger).toHaveFocus()
  })

  it('should label and describe the dialog for assistive tech', async () => {
    setup({ header: 'Delete item?', content: 'This cannot be undone.' })

    fireEvent.click(screen.getByText('Open Dialog'))

    const dialog = await screen.findByRole('dialog', { name: 'Delete item?' })
    expect(dialog).toHaveAccessibleDescription('This cannot be undone.')
  })

  it('should keep getConfirmation stable across provider re-renders', () => {
    const seen: Array<ReturnType<typeof useConfirm>['getConfirmation']> = []

    const Probe = () => {
      const { getConfirmation } = useConfirm()
      const [, setTick] = useState(0)
      seen.push(getConfirmation)
      return <button onClick={() => setTick(t => t + 1)}>tick</button>
    }

    render(
      <DialogProvider>
        <Probe />
      </DialogProvider>
    )

    fireEvent.click(screen.getByText('tick'))
    fireEvent.click(screen.getByText('tick'))

    expect(seen.length).toBeGreaterThan(1)
    expect(new Set(seen).size).toBe(1)
  })

  it('should throw error when used without provider', () => {
    // React logs the error to the console; keep the test output clean
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      renderHook(() => useConfirm())
    }).toThrow('useConfirm must be used inside a DialogProvider')

    spy.mockRestore()
  })
})

describe('DialogModal Component', () => {
  it('should render the DialogModal with default props', () => {
    render(<DialogModal onAction={jest.fn()} />)

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
        onAction={jest.fn()}
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

  it('should accept ReactNode content', () => {
    render(
      <DialogModal
        onAction={jest.fn()}
        content={<a href="/terms">Read the terms</a>}
      />
    )

    expect(screen.getByRole('link', { name: 'Read the terms' })).toBeVisible()
  })

  it('should call onAction with true when Confirm is clicked', () => {
    const onAction = jest.fn()
    render(<DialogModal onAction={onAction} />)

    fireEvent.click(screen.getByText('Confirm'))

    expect(onAction).toHaveBeenCalledWith(true)
  })

  it('should call onAction with false when Cancel is clicked', () => {
    const onAction = jest.fn()
    render(<DialogModal onAction={onAction} />)

    fireEvent.click(screen.getByText('Cancel'))

    expect(onAction).toHaveBeenCalledWith(false)
  })

  it('should call onAction with false when the dialog fires a native close event', () => {
    const onAction = jest.fn()
    render(<DialogModal onAction={onAction} />)

    fireNativeClose(screen.getByRole('dialog'))

    expect(onAction).toHaveBeenCalledWith(false)
  })
})
