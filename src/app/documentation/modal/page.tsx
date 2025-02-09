import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import Link from 'next/link'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { MODAL_CODE } from '~/components/Modal/mockCode'

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

export default async function DocumentationModalPage() {
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

      <DocumentationSection title="Modal" code={MODAL_CODE}>
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
