'use client'

import { useState } from 'react'
import { Button } from '~/components/button'
import { Text } from '~/components/Typography'
import { Modal, ModalContent, ModalHeader } from '.'

const Example = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(!isOpen)}>Open Modal</Button>

      <Modal
        className="max-w-240"
        isOpen={isOpen}
        onCloseModal={() => setOpen(false)}
      >
        <ModalHeader className="flex items-center justify-between">
          <Text tag="h3">Modal Title</Text>
          <Button size="sm" onClick={() => setOpen(false)}>
            Close
          </Button>
        </ModalHeader>
        <ModalContent className="mt-3">Modal Content</ModalContent>
      </Modal>
    </div>
  )
}

export { Example }
