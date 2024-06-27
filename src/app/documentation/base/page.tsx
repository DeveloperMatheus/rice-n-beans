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

        {/* <Text>
          The {`<BaseDrawer>`} is responsible for open and close the drawer
          through a prop called isOpen. You just need to pass a boolean to it
          from outside. <br />
          On the mobile version (until the lg breakpoint of tailwind), when the
          drawer is open, it takes the full height and width of the screen. To
          close the drawer after you click in one of it&rsquo;s items, i get a
          call from an event handler of the {`<BaseDrawer>`} called
          onDrawerClick. And if the user is on a mobile device, then i also
          close the drawer (i will show you one example on how to do it below).
        </Text> */}
      </div>
    </section>
  );
}
