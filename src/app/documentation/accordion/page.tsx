import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'
import {
  Accordion,
  AccordionContent,
  AccordionTrigger
} from '~/components/Accordion'

import { ACCORDION_CODE } from '~/components/Accordion/mockCode'

const ACCORDION_CODE_VIEW = `<Accordion className="space-y-3">
  <div>
    <AccordionTrigger id="test1">Accordion 1</AccordionTrigger>
    <AccordionContent id="test1">Content 1</AccordionContent>
  </div>
  <div>
    <AccordionTrigger id="test2">Accordion 2</AccordionTrigger>
    <AccordionContent id="test2">Content 2</AccordionContent>
  </div>
  <div>
    <AccordionTrigger id="test3">Accordion 3</AccordionTrigger>
    <AccordionContent id="test3">Content 3</AccordionContent>
  </div>
</Accordion>
`

export default async function DocumentationAccordionPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Accordion</Text>

        <Text tag="h2">
          Accordion is a component that allows you to show and hide content
          depending on the user&rsquo;s interaction.
        </Text>
      </div>

      <DocumentationSection title="Accordion" code={ACCORDION_CODE}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList className="p-0">
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Accordion className="space-y-3">
              <div>
                <AccordionTrigger id="test1">Accordion 1</AccordionTrigger>
                <AccordionContent id="test1">Content 1</AccordionContent>
              </div>
              <div>
                <AccordionTrigger id="test2">Accordion 2</AccordionTrigger>
                <AccordionContent id="test2">Content 2</AccordionContent>
              </div>
              <div>
                <AccordionTrigger id="test3">Accordion 3</AccordionTrigger>
                <AccordionContent id="test3">Content 3</AccordionContent>
              </div>
            </Accordion>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{ACCORDION_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
