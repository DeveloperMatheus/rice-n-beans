'use client'

import { useState } from 'react'
import { Button } from '~/components/button'
import { Card } from '~/components/card'
import { Modal, ModalContent, ModalHeader } from '~/components/Modal'
import { Text } from '~/components/Typography'

export const DocumentationSection = ({
  code,
  title,
  children
}: {
  code: string
  title: string
  children?: React.ReactNode
}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <section className="mt-5 lg:mt-8">
        <div className="flex items-center justify-start gap-3">
          <Text tag="h3">{title}</Text>
          <Button onClick={() => setOpen(!isOpen)}>
            See the component Code
          </Button>
        </div>

        {children}
      </section>
      <Modal
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
          <Card className="overflow-x-auto whitespace-pre" tabIndex={0}>
            <code>{code}</code>
          </Card>
        </ModalContent>
      </Modal>
    </>
  )
}
