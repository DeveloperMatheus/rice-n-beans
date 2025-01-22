import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import Link from 'next/link'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'

const CODE_MODAL_STLYES = `'use client'

import { ComponentProps, useCallback, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

const modalStyles =
  'rounded-lg w-full max-w-[40rem] open:animate-modal backdrop:backdrop-blur-sm open:backdrop:animate-fade-in'
const modalContentStyles = 'px-3 pb-3'
const modalHeaderStyles = 'px-3 pt-3'
const modalFooterStyles = 'border-t border-default flex justify-end p-3'
`

const CODE_MODAL_COMPONENT = `
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
`

const CODE_MODAL_VIEW = `<Modal
  className="max-w-[60rem]"
  isOpen={isOpen}
  onCloseModal={() => setOpen(false)}
>
  <ModalHeader className="flex items-center justify-between">
    <Text tag="h3">{title}</Text>
    <Button size="sm" onClick={() => setOpen(false)}>
      Close
    </Button>
  </ModalHeader>
  <ModalContent className="mt-3">
    <Card className="overflow-x-auto whitespace-pre">
      <code>{codeStyle}</code>
      <code>{codeComponent}</code>
    </Card>
  </ModalContent>
</Modal>
`

export default function DocumentationModalPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Modal</Text>

        <Text tag="h2">
          Modal is a controlled component made through the use of the{' '}
          {`<dialog>`} api. It is a blocking element so the user cannot interact
          with the rest of the page until the modal is closed.
        </Text>

        <Text>
          The modal is composed by the following components: {`<Modal>`},{' '}
          {`<ModalContent>`}, {`<ModalHeader>`} and {`<ModalFooter>`}. See:
          <Link href="https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog">
            {' '}
            https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog
          </Link>
        </Text>
      </div>

      <DocumentationSection
        title="Modal"
        codeStyle={CODE_MODAL_STLYES}
        codeComponent={CODE_MODAL_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="w-fit">
              <Text>
                The button &rsquo;See the component Code&rsquo; is literally
                showing a modal
              </Text>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_MODAL_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
