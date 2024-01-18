import { Card } from "~/components/Card";
import { Checkbox, Input } from "~/components/Form";
import { FormLabel } from "~/components/Form/FormLabel";
import { FormRadio } from "~/components/Form/FormRadio";
import { FormRange } from "~/components/Form/FormRange";
import { FormSelect } from "~/components/Form/FormSelect";
import { FormSwitch } from "~/components/Form/FormSwitch";
import { ThemeDropdown } from "~/components/Theme/ThemeDropdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Page title</h2>

      <div>
        <h2>Theme changer: </h2>
        <ThemeDropdown />
      </div>

      <div>
        <h2>Input: </h2>
        <Input />
      </div>

      <div className="w-full">
        <h2>Select:</h2>
        <div className="flex flex-row items-center justify-center">
          <FormSelect>
            <option defaultChecked hidden></option>
            <option>Test1</option>
            <option>Test2</option>
            <option>Test3</option>
            <option>Test4</option>
          </FormSelect>
        </div>
      </div>

      <div>
        <h2>Checkbox:</h2>
        <div className="flex flex-row items-center justify-center">
          <Checkbox id="oi" />
          <FormLabel htmlFor="oi" className="ml-2">
            Test
          </FormLabel>
        </div>
      </div>

      <div>
        <h2>Radio:</h2>
        <div className="flex flex-row items-center justify-center space-x-2">
          <FormRadio name="test" />
          <FormRadio name="test" />
          <FormRadio name="test" />
        </div>
      </div>

      <div>
        <h2>Card:</h2>
        <div>
          <Card>
            <p>test</p>
          </Card>
          <Card>
            <p>test</p>
          </Card>
        </div>
      </div>

      <div className="space-x-4">
        <h2>Switch:</h2>
        <FormSwitch aria-label="Teste" disabled />
        <FormSwitch />
        <FormSwitch />
        <FormSwitch />
      </div>

      <div className="space-x-4">
        <h2>Range:</h2>
        <FormRange />
      </div>
    </main>
  );
}
