'use client'

import {
  ComponentProps,
  MouseEvent,
  SyntheticEvent,
  useEffect,
  useRef
} from 'react'
import { tv } from 'tailwind-variants'

const modalStyles = tv({
  slots: {
    wrapper:
      'open:animate-modal open:backdrop:animate-fade-in my-auto w-full rounded-default backdrop:backdrop-blur-xs md:mx-auto md:w-auto',
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

const isOutsideBox = (event: MouseEvent<HTMLElement>) => {
  const { top, bottom, left, right } =
    event.currentTarget.getBoundingClientRect()

  return (
    event.clientY < top ||
    event.clientY > bottom ||
    event.clientX < left ||
    event.clientX > right
  )
}

const Modal = ({
  className,
  isOpen,
  onCloseModal,
  onClick,
  onClose,
  ...props
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    if (isOpen && !element.open) element.showModal()

    if (!isOpen && element.open) element.close()
  }, [isOpen])

  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (onClick) onClick(event)

    if (event.target === event.currentTarget && isOutsideBox(event)) {
      onCloseModal()
    }
  }

  const handleClose = (event: SyntheticEvent<HTMLDialogElement>) => {
    if (onClose) onClose(event)

    if (isOpen) onCloseModal()
  }

  return (
    <dialog
      ref={ref}
      className={wrapper({ className })}
      onClick={handleClick}
      onClose={handleClose}
      {...props}
    />
  )
}

/* --- Sections --- */
const ModalContent = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={content({ className })} {...props} />
)

const ModalHeader = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={header({ className })} {...props} />
)

const ModalFooter = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={footer({ className })} {...props} />
)

export { Modal, ModalContent, ModalHeader, ModalFooter }
