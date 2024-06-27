import { Text } from "~/components/Typography";

export default function DocumentationBasePage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Base</Text>

        <Text tag="h2">
          Base is a group of components made to compose your scaffolding layout
          (this is good to make dashboards)
        </Text>

        <Text>
          The base is composed by the following components: {`<Base>`},{" "}
          {`<BaseContainer>`}, {`<BaseContent>`}, {`<BaseDrawer>`},{" "}
          {`<BaseHeader>`}, {`<BaseToggleDrawer>`}.
        </Text>
        <Text>
          The {`<Base>`} is the main component that will wrap all the others. It
          has an internal state to control the drawer through a Provider.
        </Text>
        <Text>
          The {`<BaseToggleDrawer>`} is the component that will be responsible
          to open and close the drawer. But you can use the BaseContext to
          extract the isOpen state and the function to toggle it and use it
          however you want.
        </Text>
      </div>
    </section>
  );
}
