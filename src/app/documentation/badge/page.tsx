import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { getCode } from '~/services/code'
import { Badge } from '~/components/Badge'
import { getBaseUrl } from '~/utils/getBaseUrl'

const BADGE_CODE_VIEW = `<div className="flex items-center justify-start gap-3">
  <Badge>Default</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="secondary">Secondary</Badge>
</div>
`

export default async function DocumentationBadgePage() {
  const baseUrl = await getBaseUrl()
  const codeResponse = await getCode(baseUrl, 'Badge')

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Badge</Text>

        <Text tag="h2">Badge allows you to display data in a quick way</Text>
      </div>

      <DocumentationSection title="Badge" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList className="p-0">
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="flex items-center justify-start gap-3">
              <Badge>Default</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{BADGE_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
