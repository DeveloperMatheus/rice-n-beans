import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'

const CODE_TABS_VIEW = `<Tabs defaultValue="view" className="mt-3">
  <TabList>
    <Tab id="view">View</Tab>
    <Tab id="code">Code</Tab>
  </TabList>
  <TabPanel id="view">
    <div className="w-fit">
      <Text>
        The buttons &rsquo;View&rsquo; and &rsquo;Code&rsquo; are
        literally showing the Tabs
      </Text>
    </div>
  </TabPanel>
  <TabPanel id="code">
    <code className="whitespace-pre">Ok i think i'm entering in an infinite loop here</code>
  </TabPanel>
</Tabs>
`

export default async function DocumentationTabsPage() {
  return (
    <section>
      <Text tag="h1">Tabs</Text>

      <Text tag="h2">
        Tabs is a set of controlled components made through the use of useState
        and Context API in order to give you... Tabs.
      </Text>

      <Text>
        The Tabs are composed by the following components: {`<Tabs>`},{' '}
        {`<TabList>`}, {`<TabPanel>`} and {`<Tab>`}. You have to pass an id to
        synchronize which tab button will open which tab panel, otherwise it
        will not work.
      </Text>

      <DocumentationSection title="Tabs">
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="w-fit">
              <Text>
                The buttons &rsquo;View&rsquo; and &rsquo;Code&rsquo; are
                literally showing the Tabs
              </Text>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_TABS_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
