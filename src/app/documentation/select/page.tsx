import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { Label } from '~/components/Label'
import Link from 'next/link'
import { Select } from '~/components/Select'
import { SELECT_CODE } from '~/components/Select/mockCode'

export default async function DocumentationSelectPage() {
  const CODE_SELECT_VIEW = `<Select>
  <option defaultChecked hidden>
    Select an option
  </option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>`

  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Select</Text>

        <Text tag="h2">
          Select is a component made with the {'<select> HTML5 tag'}
        </Text>

        <Text tag="h3">
          See the api reference here:{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/es/docs/Web/HTML/Element/select"
          >
            https://developer.mozilla.org/es/docs/Web/HTML/Element/select
          </Link>
        </Text>
      </div>

      <DocumentationSection title="Select" code={SELECT_CODE}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Label htmlFor="input-select">This is a select</Label>
            <Select id="input-select">
              <option defaultChecked hidden>
                Select an option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Select>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_SELECT_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
