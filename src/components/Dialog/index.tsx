'use client'

import React, { createContext, useContext, useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '~/components/modal'
import { Text } from '~/components/typography'
import { Button } from '~/components/button'
import { createPortal } from 'react-dom'
import { tv } from 'tailwind-variants'

const dialogStyles = tv({
  base: 'max-w-80 select-text'
})

/* --- Context --- */
type DialogContextProps = {
  render: (modal: DialogProps, handleAction: (result: boolean) => void) => void
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined)

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState<
    DialogProps & { action: (value: boolean) => void }
  >()

  const render = (
    modal: DialogProps,
    handleAction: (result: boolean) => void
  ) => {
    setModal({
      ...modal,
      action: result => {
        setIsOpen(false)
        handleAction(result)
      }
    })

    setIsOpen(true)
  }

  return (
    <DialogContext value={{ render }}>
      {children}

      {isOpen &&
        createPortal(
          <DialogModal
            variant={modal?.variant}
            open={isOpen}
            header={modal?.header}
            content={modal?.content}
            rejectText={modal?.rejectText}
            confirmText={modal?.confirmText}
            handleAction={modal?.action}
          />,
          document.body
        )}
    </DialogContext>
  )
}

type DialogProps = {
  header?: string
  content?: string
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

/* --- DialogModal --- */
const DialogModal = ({
  open,
  handleAction,
  header = 'Are you sure?',
  content = 'This action cannot be undone.',
  rejectText = 'Cancel',
  confirmText = 'Confirm',
  variant = 'default'
}: DialogProps & {
  open: boolean
  handleAction?: (value: boolean) => void
}) => {
  const handleClose = (value: boolean) => {
    if (!handleAction) return
    handleAction(value)
  }

  return (
    <Modal
      isOpen={open}
      onCloseModal={() => handleClose(false)}
      className={dialogStyles()}
    >
      <ModalHeader>
        <Text tag="h3" className="text-center">
          {header}
        </Text>
      </ModalHeader>
      <ModalContent>{content}</ModalContent>

      <ModalFooter className="flex justify-end space-x-3">
        <Button
          className="w-full"
          variant="outline"
          size="sm"
          onClick={() => handleClose(false)}
        >
          {rejectText}
        </Button>
        <Button
          className="w-full"
          variant={variant}
          size="sm"
          onClick={() => handleClose(true)}
        >
          {confirmText}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

/* --- Hook --- */
const useConfirm = () => {
  const dialogContext = useContext(DialogContext)

  if (!dialogContext) {
    throw new Error('useConfirm must be used inside an DialogProvider')
  }

  const getConfirmation = async (modal: DialogProps): Promise<boolean> => {
    const reactionPromise = new Promise<boolean>(resolve => {
      dialogContext.render(modal, resolve)
    })

    return reactionPromise
  }

  return {
    getConfirmation
  }
}

export { DialogProvider, DialogModal, useConfirm }
