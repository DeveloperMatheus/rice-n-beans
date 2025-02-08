'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '~/components/Button'
import { Card } from '~/components/Card'
import { Modal, ModalContent, ModalHeader } from '~/components/Modal'
import { Text } from '~/components/Typography'
import { getCode } from '~/services/code'

export const DocumentationSection = ({
  title,
  children
}: {
  title: string
  children?: React.ReactNode
}) => {
  const [isOpen, setOpen] = useState(false)

  const [code, setCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCode = async () => {
      setIsLoading(true)
      try {
        const response = await getCode(title)
        setCode(response.code)
      } catch {
        setCode('Error fetching code')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCode()
  }, [title])

  function renderCode(): React.ReactNode {
    if (isLoading) return 'Loading...'

    if (!code) return

    return <code>{code}</code>
  }

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
            {renderCode()}
          </Card>
        </ModalContent>
      </Modal>
    </>
  )
}
