import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { Separator } from '~/components/Separator'
import Link from 'next/link'

export default async function DocumentationSeparatorPage() {
  const CODE_SEPARATOR_VIEW = `<Text tag="h4">Orientation:</Text>
<div className="flex items-center justify-start gap-5 h-9">
  <Text>Horizontal:</Text> <Separator className="w-9" />
  <Text>Vertical:</Text>
  <Separator orientation="vertical" />
</div>
`
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Separator</Text>

        <Text tag="h2">
          Separator is a component made with the {'div HTML5 tag'}
        </Text>

        <Text tag="h3">
          See the api reference here:{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/es/docs/Web/HTML/Element/div"
          >
            https://developer.mozilla.org/es/docs/Web/HTML/Element/div
          </Link>
        </Text>
      </div>

      <DocumentationSection title="Separator">
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Text tag="h4">Orientation:</Text>
            <div className="flex items-center justify-start gap-5 h-9">
              <Text>Horizontal:</Text> <Separator className="w-9" />
              <Text>Vertical:</Text>
              <Separator orientation="vertical" />
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_SEPARATOR_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
