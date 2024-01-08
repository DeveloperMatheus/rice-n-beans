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
        {/* <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label> */}
        <input
          type="checkbox"
          className="appearance-none cursor-pointer w-12 h-6 border rounded-full relative before:absolute before:top-3.5 before:-translate-x-1 checked:before:translate-x-[1.3rem] before:-translate-y-1/2 before:transition-all before:content-circleIcon checked:before:brightness-0 dark:checked:before:brightness-200"
        />
      </div>
    </main>
  );
}
