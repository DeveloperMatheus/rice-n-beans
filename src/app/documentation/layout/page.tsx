import { Text } from "~/components/Typography";
import { ButtonSection } from "./components/ButtonSection";
import { BadgeSection } from "./components/BadgeSection";
import { CardSection } from "./components/CardSection";

export default function DocumentationLayoutPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Layout</Text>

        <Text tag="h2">
          Layout is a group of components made to compose your... Layout
        </Text>
      </div>
      <ButtonSection />
      <BadgeSection />
      <CardSection />
    </section>
  );
}
