import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import { Label } from '~/components/Label'
import Link from 'next/link'
import { DatePicker } from '~/components/Datepicker'
import { DATEPICKER_CODE } from '~/components/Datepicker/mockCode'

export default async function DocumentationDatePickerPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Date Picker</Text>

        <Text tag="h2">
          Date Picker is a component made with the {'<input> HTML5 tag'}, that
          can be three types: &rsquo;date&rsquo; | &rsquo;time&rsquo; |
          &rsquo;datetime-local&rsquo;
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

      <DocumentationSection title="Date Picker" code={DATEPICKER_CODE}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Label htmlFor="input-date-picker">Date Picker</Label>
            <DatePicker
              id="input-date-picker"
              min="1991-01-01"
              className="w-fit"
            />
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{`<DatePicker min="1900-01-01" className="w-fit" />`}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
