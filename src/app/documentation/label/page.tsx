import { getCode } from '~/services/code'
import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import Link from 'next/link'
import { Label } from '~/components/Label'
import { getBaseUrl } from '~/utils/getBaseUrl'

export default async function DocumentationLabelPage() {
  const baseUrl = await getBaseUrl()
  const codeResponse = await getCode(baseUrl, 'Label')

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Label</Text>

        <Text tag="h2">
          Label is a component made with the {'<label> HTML5 tag'}
        </Text>

        <Text tag="h3">
          See the api reference here:{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/es/docs/Web/HTML/Element/label"
          >
            https://developer.mozilla.org/es/docs/Web/HTML/Element/label
          </Link>
        </Text>
      </div>

      <DocumentationSection title="Label" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Label>This is a label</Label>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code>{`<Label>This is a label</Label>`}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
