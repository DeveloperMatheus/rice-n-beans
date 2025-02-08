import { getCode } from '~/services/code'
import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { Label } from '~/components/Label'
import Link from 'next/link'
import { Switch } from '~/components/Switch'
import { getBaseUrl } from '~/utils/getBaseUrl'

export default async function DocumentationSwitchPage() {
  const baseUrl = await getBaseUrl()
  const codeResponse = await getCode(baseUrl, 'Switch')

  const CODE_SWITCH_VIEW = `<div className="flex items-center justify-start">
  <Label htmlFor="test-switch" className="mr-2">
    This is a switch
  </Label>
  <Switch id="test-switch" />
</div>`

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Switch</Text>

        <Text tag="h2">
          Switch is a component made with the{' '}
          {'<input type="checkbox"> HTML5 tag'}, along with the role of{' '}
          <code>switch</code>
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

      <DocumentationSection title="Switch" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="flex items-center justify-start">
              <Label htmlFor="test-switch" className="mr-2">
                This is a switch
              </Label>
              <Switch id="test-switch" />
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_SWITCH_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
