import { Text } from '~/components/typography'
import { Tab, TabList, TabPanel, Tabs } from '.'

const Example = () => {
  return (
    <Tabs defaultValue="view" className="mt-3">
      <TabList>
        <Tab id="view">View</Tab>
        <Tab id="code">Code</Tab>
      </TabList>
      <TabPanel id="view">
        <div className="w-fit">
          <Text>
            The buttons &rsquo;View&rsquo; and &rsquo;Code&rsquo; are literally
            showing the Tabs
          </Text>
        </div>
      </TabPanel>
      <TabPanel id="code">
        <code className="whitespace-pre">
          Ok i think i'm entering in an infinite loop here
        </code>
      </TabPanel>
    </Tabs>
  )
}

export { Example }
