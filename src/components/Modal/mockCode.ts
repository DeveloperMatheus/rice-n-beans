export const MODAL_CODE = `'use client'

import { ComponentProps, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

const modalStyles =
  'open:animate-modal open:backdrop:animate-fade-in my-auto w-full rounded-lg backdrop:backdrop-blur-xs md:mx-auto md:w-auto'
const modalContentStyles = 'px-3 pb-3'
const modalHeaderStyles = 'px-3 pt-3'
const modalFooterStyles = 'border-default border-t p-3'

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

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current !== event.target) return
    onCloseModal()
  }

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
  }, [isOpen])

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
`
