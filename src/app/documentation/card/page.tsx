import { getCode } from '~/services/code'
import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { Label } from '~/components/Label'
import { Card } from '~/components/Card'
import Link from 'next/link'

export default async function DocumentationCardPage() {
  const codeResponse = await getCode('Card')

  const CODE_CARD_VIEW = `<div className="w-fit">
  <Card>This is a card inside a tab</Card>
</div>
`
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Card</Text>

        <Text tag="h2">
          Card is a component made with the {'<div> HTML5 tag'}
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

      <DocumentationSection title="Card" code={codeResponse.code}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="w-fit">
              <Card>This is a card inside a tab</Card>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_CARD_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
