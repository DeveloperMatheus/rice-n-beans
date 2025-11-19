'use client'

import { ComponentProps, useCallback, useEffect, useRef } from 'react'
import { tv } from 'tailwind-variants'

const modalStyles = tv({
  slots: {
    wrapper:
      'open:animate-modal open:backdrop:animate-fade-in my-auto w-full rounded-lg backdrop:backdrop-blur-xs md:mx-auto md:w-auto',
    content: 'px-3 pb-3',
    header: 'px-3 pt-3',
    footer: 'border-default border-t p-3'
  }
})

const { wrapper, header, content, footer } = modalStyles()

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
  }, [isOpen, handleClickOutside])

  return (
    <dialog
      className={wrapper({ className })}
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
  <div className={content({ className })} {...props}>
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
  <div className={header({ className })} {...props}>
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
  <div className={footer({ className })} {...props}>
    {children}
  </div>
)

ModalFooter.displayName = 'ModalFooter'

export { Modal, ModalContent, ModalHeader, ModalFooter }
