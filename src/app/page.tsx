import Image from "next/image";
import { Card } from "~/components/Card";
import { FormCheckbox } from "~/components/Form/FormCheckbox";
import { FormInput } from "~/components/Form/FormInput";
import { FormLabel } from "~/components/Form/FormLabel";
import { FormRadio } from "~/components/Form/FormRadio";
import { FormSelect } from "~/components/Form/FormSelect";
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
        <FormInput />
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
          <FormCheckbox id="oi" />
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

      <div>
        oi:
        <input
          type="checkbox"
          className="appearance-none cursor-pointer bg-white dark:bg-zinc-950 w-12 h-6 border border-zinc-200 dark:border-zinc-800 rounded-full relative before:absolute before:top-[0.88rem] before:-translate-x-1 checked:before:translate-x-[1.25rem] before:-translate-y-1/2 before:transition-all before:content-circleIcon before:brightness-[.8] dark:before:brightness-[.4] checked:before:brightness-0 dark:checked:before:brightness-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
    </main>
  );
}
