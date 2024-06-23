import { Button, Card } from "~/components/Layout";
import { Text } from "~/components/Typography";
import { ButtonSection } from "./components/ButtonSection";
import { BadgeSection } from "./components/BadgeSection";

export default function DocumentationLayoutPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Layout</Text>

        <Text tag="h2">
          Layout is a group of components made to compose your... Layout
        </Text>
      </div>

      {/* <div className="flex flex-row items-center justify-center gap-3">
        <Link href="/documentation/layout/button">
        <Card>
        <Button>Button</Button>
        </Card>
        </Link>
        <Link href="/documentation/layout/button">
        <Card>
        <Badge>Badge</Badge>
        </Card>
        </Link>
        <Link href="/documentation/layout/button">
        <Card>Card</Card>
        </Link>
        </div> */}
      <ButtonSection />
      <BadgeSection />
    </section>
  );
}
