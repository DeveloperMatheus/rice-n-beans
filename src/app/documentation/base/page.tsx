import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";
import { DocumentationBaseExample } from "./components/DocumentationBaseExample";

export default function DocumentationBasePage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Base</Text>

        <Text tag="h2">
          Base is a group of components made to compose your scaffolding layout
          with a side navigation drawer.
        </Text>

        <Text>
          The base is composed by the following components: {`<Base>`},{" "}
          {`<BaseContainer>`}, {`<BaseContent>`}, {`<BaseDrawer>`},{" "}
          {`<BaseHeader>`}, {`<BaseToggleDrawer>`}.
        </Text>
        <Text>
          The {`<Base>`} has a prop called <strong>orientation</strong>. This
          prop is meant to control the the position of the {`<BaseDrawer>`}, vs
          the other components (container, content). This prop value can be:{" "}
          <strong>{'"left" | "right"'}</strong>.
        </Text>
        <Text>
          The {`<BaseDrawer>`} has a prop called <strong>isOpen</strong>, which
          is a <strong>boolean</strong>. This prop is meant to control the
          drawer state. How you will control it is up to you.
        </Text>
        <Text>
          The {`<BaseToggleDrawer>`} is just a button that has an icon inside,
          and it is meant to be used to toggle the drawer.
        </Text>
      </div>

      <DocumentationSection title="Base" codeStyle={"a"} codeComponent={"b"}>
        <Tabs defaultValue="view" className="mt-3">
          <TabList className="p-0">
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view" className="overflow-hidden">
            <DocumentationBaseExample />
          </TabPanel>
          <TabPanel id="code">
            <code className="whitespace-pre">{"c"}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  );
}
