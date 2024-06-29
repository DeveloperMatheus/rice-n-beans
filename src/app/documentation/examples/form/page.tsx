import { Input, Label } from "~/components/Form";
import { Card } from "~/components/Layout";
import { Text } from "~/components/Typography";

export default function DocumentationExampleFormPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Example Form</Text>

        <Card>
          <form>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <Label>Name</Label>
                <Input placeholder="Type your name" />
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
