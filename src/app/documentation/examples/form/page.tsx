import { Checkbox, Input, Label } from "~/components/Form";
import { Button, Card } from "~/components/Layout";
import { Text } from "~/components/Typography";

export default function DocumentationExampleFormPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Example Form</Text>

        <Card>
          <form>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 xl:col-span-3">
                <div className="flex items-center justify-center gap-2 w-full">
                  <Label>Name</Label>
                  <Input type="text" />
                </div>
              </div>
              <div className="col-span-12 xl:col-span-3">
                <div className="flex items-center justify-center gap-2 w-full">
                  <Label>Surname</Label>
                  <Input type="text" />
                </div>
              </div>
              <div className="col-span-12 xl:col-span-3">
                <div className="flex items-center justify-center gap-2 w-full">
                  <Label>Email</Label>
                  <Input type="email" />
                </div>
              </div>
              <div className="col-span-12 xl:col-span-3">
                <div className="flex items-center justify-center gap-2 w-full">
                  <Label>Phone</Label>
                  <Input type="tel" />
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex items-center justify-center gap-5">
                  <div className="flex items-center justify-center gap-2">
                    <Label htmlFor="keep-updated">Keep me updated</Label>
                    <Checkbox id="keep-updated" />
                  </div>
                  <Button>Submit</Button>
                </div>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
