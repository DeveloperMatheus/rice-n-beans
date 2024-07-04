import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "~/components/Accordion";

export default function DocumentationAccordionPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Accordion</Text>

        <Text tag="h2">
          Accordion is a component that allows you to show and hide content
          depending on the user&rsquo;s interaction.
        </Text>
      </div>

      <DocumentationSection
        title="Accordion"
        codeStyle={"a"}
        codeComponent={"b"}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList className="p-0">
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Accordion className="border-none p-0">
              <AccordionTrigger>Test</AccordionTrigger>
              <AccordionContent>Test Content</AccordionContent>
            </Accordion>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{"c"}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  );
}
