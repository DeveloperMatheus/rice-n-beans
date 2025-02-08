import { getCode } from '~/services/code'
import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { ErrorMessage } from '~/components/ErrorMessage'
import { getBaseUrl } from '~/utils/getBaseUrl'

export default async function DocumentationErrorMessagePage() {
  const baseUrl = await getBaseUrl()
  const codeResponse = await getCode(baseUrl, 'ErrorMessage')

  const CODE_ERROR_VIEW = `<ErrorMessage>
  This is an error message to be displayed when your fields are invalid or not satisfying the requirements
</ErrorMessage>
`

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Error Message</Text>

        <Text tag="h2">
          Error Message is a component made with the {'<p> HTML5 tag'}
        </Text>
      </div>

      <DocumentationSection title="Error" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <ErrorMessage>
              This is an error message to be displayed when your fields are
              invalid or not satisfying the requirements
            </ErrorMessage>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_ERROR_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
