import { getCode } from '~/services/code'
import { Text } from '~/components/Typography'
import { DocumentationSection } from '../../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { Label } from '~/components/Label'
import { Range } from '~/components/Range'
import Link from 'next/link'

export default async function DocumentationRangePage() {
  const codeResponse = await getCode('Range')

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Range</Text>

        <Text tag="h2">
          Range is a component made with the {'<input> HTML5 tag'}
        </Text>

        <Text tag="h3">
          See the api reference here:{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/es/docs/Web/HTML/Element/input"
          >
            https://developer.mozilla.org/es/docs/Web/HTML/Element/input
          </Link>
        </Text>
      </div>

      <DocumentationSection title="Range" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Label htmlFor="input-range">Range</Label>
            <Range id="input-range" />
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{`<Range />`}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
