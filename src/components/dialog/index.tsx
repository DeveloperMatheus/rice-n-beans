'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react'
import { tv } from 'tailwind-variants'
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '~/components/modal'
import { Text } from '~/components/typography'
import { Button } from '~/components/button'

const dialogStyles = tv({
  base: 'max-w-80 select-text'
})

/* --- Types --- */
type DialogProps = {
  header?: string
  content?: React.ReactNode
  confirmText?: string
  rejectText?: string
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link'
}

type DialogContextProps = {
  confirm: (options: DialogProps) => Promise<boolean>
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined)

/* --- Provider --- */
const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [options, setOptions] = useState<DialogProps>()

  const triggerRef = useRef<HTMLElement | null>(null)

  const resolverRef = useRef<((value: boolean) => void) | null>(null)

  const settle = useCallback((result: boolean) => {
    const resolve = resolverRef.current
    if (!resolve) return

    resolverRef.current = null
    setIsOpen(false)
    resolve(result)
  }, [])

  const confirm = useCallback(
    (next: DialogProps) =>
      new Promise<boolean>(resolve => {
        if (resolverRef.current) {
          resolverRef.current(false)
        } else {
          const active = document.activeElement
          triggerRef.current =
            active instanceof HTMLElement && !active.closest('dialog')
              ? active
              : null
        }

        resolverRef.current = resolve
        setOptions(next)
        setIsOpen(true)
      }),
    []
  )

  // Restore focus once the dialog has been removed from the DOM.
  useEffect(() => {
    if (isOpen) return

    const element = triggerRef.current
    if (!element) return

    triggerRef.current = null
    if (element.isConnected) element.focus()
  }, [isOpen])

  useEffect(
    () => () => {
      resolverRef.current?.(false)
      resolverRef.current = null
    },
    []
  )

  const value = useMemo(() => ({ confirm }), [confirm])

  return (
    <DialogContext value={value}>
      {children}

      {isOpen && <DialogModal {...options} onAction={settle} />}
    </DialogContext>
  )
}

/* --- DialogModal --- */
const DialogModal = ({
  onAction,
  header = 'Are you sure?',
  content = 'This action cannot be undone.',
  rejectText = 'Cancel',
  confirmText = 'Confirm',
  variant = 'default'
}: DialogProps & { onAction: (result: boolean) => void }) => {
  const id = useId()
  const titleId = `${id}-title`
  const descriptionId = `${id}-description`

  return (
    <Modal
      isOpen
      onCloseModal={() => onAction(false)}
      className={dialogStyles()}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <ModalHeader>
        <Text tag="h3" id={titleId} className="text-center">
          {header}
        </Text>
      </ModalHeader>

      <ModalContent id={descriptionId}>{content}</ModalContent>

      <ModalFooter className="flex justify-end space-x-3">
        <Button
          className="w-full"
          variant="outline"
          size="sm"
          onClick={() => onAction(false)}
        >
          {rejectText}
        </Button>
        <Button
          className="w-full"
          variant={variant}
          size="sm"
          onClick={() => onAction(true)}
        >
          {confirmText}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

/* --- Hook --- */
const useConfirm = () => {
  const context = useContext(DialogContext)

  if (!context) {
    throw new Error('useConfirm must be used inside a DialogProvider')
  }

  return useMemo(() => ({ getConfirmation: context.confirm }), [context])
}

export { DialogProvider, DialogModal, useConfirm }
export type { DialogProps }
