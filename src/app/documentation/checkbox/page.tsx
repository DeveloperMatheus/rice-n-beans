import { getCode } from '~/services/code'
import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { Label } from '~/components/Label'
import { Checkbox } from '~/components/Checkbox'
import Link from 'next/link'
import { getBaseUrl } from '~/utils/getBaseUrl'

export default async function DocumentationCheckboxPage() {
  const baseUrl = await getBaseUrl()
  const codeResponse = await getCode(baseUrl, 'Checkbox')

  const CODE_CHECKBOX_VIEW = `<div className="flex items-center justify-start">
  <Label className="mr-3" htmlFor="test-check">This is a checkbox</Label>
  <Checkbox id="test-check" />
</div>
`
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Checkbox</Text>

        <Text tag="h2">
          Checkbox is a component made with the{' '}
          {'<input type="checkbox"> HTML5 tag'}
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

      <DocumentationSection title="Checkbox" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="flex items-center justify-start">
              <Label className="mr-3" htmlFor="test-check">
                This is a checkbox
              </Label>
              <Checkbox id="test-check" />
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_CHECKBOX_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
