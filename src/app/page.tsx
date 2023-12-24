import Image from "next/image";
import { FormCheckbox } from "~/components/Form/FormCheckbox";
import { FormInput } from "~/components/Form/FormInput";
import { FormLabel } from "~/components/Form/FormLabel";
import { FormRadio } from "~/components/Form/FormRadio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Page title</h2>
      <FormInput />

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
    </main>
  );
}
