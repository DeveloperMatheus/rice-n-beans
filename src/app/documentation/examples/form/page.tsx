import { Checkbox, Input, Label, Select, Switch } from "~/components/Form";
import { Button, Card } from "~/components/Layout";
import { Text } from "~/components/Typography";

export default function DocumentationExampleFormPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Example Form</Text>

        <Card className="w-fit">
          <form className="space-y-3">
            <div className="space-y-1">
              <Label>Login</Label>
              <Input type="text" />
            </div>
            <div className="space-y-1">
              <Label>Password</Label>
              <Input type="password" />
            </div>
            <div className="text-center">
              <Button className="w-32">Submit</Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
