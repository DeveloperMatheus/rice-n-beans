import { Text } from "~/components/Typography";
import { ExampleFormLogin } from "./components/ExampleFormLogin";

export default function DocumentationExampleFormPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Example Form</Text>
        <Text tag="h3">
          This is not necessary, since i created uncontrolled components, but
          you can use the Controller HOC from RHF if you want
        </Text>
        <ExampleFormLogin
          email="rice@beans.com"
          isLoginStored={true}
          password="riceandbeans"
        />
      </div>
    </section>
  );
}
