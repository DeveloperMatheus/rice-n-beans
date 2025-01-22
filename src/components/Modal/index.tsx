'use client'

import { ComponentProps, useCallback, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

const modalStyles =
  'rounded-lg w-full max-w-[40rem] open:animate-modal backdrop:backdrop-blur-sm open:backdrop:animate-fade-in'
const modalContentStyles = 'px-3 pb-3'
const modalHeaderStyles = 'px-3 pt-3'
const modalFooterStyles = 'border-t border-default flex justify-end p-3'

/* --- Modal --- */
type ModalProps = {
  isOpen: boolean
  onCloseModal: () => void
} & ComponentProps<'dialog'>

const Modal = ({
  children,
  className,
  isOpen,
  onCloseModal,
  ...props
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current !== event.target) return
      onCloseModal()
    },
    [onCloseModal]
  )

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal()
      document.addEventListener('click', handleClickOutside)
      return
    }

    ref.current?.close()
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return (
    <dialog
      className={twMerge(modalStyles, className)}
      onClose={() => onCloseModal()}
      ref={ref}
      {...props}
    >
      {children}
    </dialog>
  )
}

Modal.displayName = 'Modal'

/* --- ModalContent --- */
const ModalContent = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div className={twMerge(modalContentStyles, className)} {...props}>
    {children}
  </div>
)

ModalContent.displayName = 'ModalContent'

/* --- ModalHeader --- */
const ModalHeader = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div className={twMerge(modalHeaderStyles, className)} {...props}>
    {children}
  </div>
)

ModalHeader.displayName = 'ModalHeader'

/* --- ModalFooter --- */
const ModalFooter = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div className={twMerge(modalFooterStyles, className)} {...props}>
    {children}
  </div>
)

ModalFooter.displayName = 'ModalFooter'

export { Modal, ModalContent, ModalHeader, ModalFooter }
