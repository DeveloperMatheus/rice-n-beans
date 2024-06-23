import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Card } from "~/components/Layout";
import { Checkbox, Input, Label, Radio } from "~/components/Form";

const CODE_LABEL_STLYES = `
const labelStyles = "inline-block font-sans font-bold text-primary select-none";
`;

const CODE_INPUT_STLYES = `
const inputStyles =
  "appearance-none font-sans w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 ring-offset-white file:border-0 file:bg-transparent file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300";
`;

const CODE_CHECKBOX_STLYES = `
const checkboxStyles =
  "relative bg-white dark:bg-zinc-950 rounded-md h-5 w-5 cursor-pointer appearance-none border border-zinc-200 dark:border-zinc-800 checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:w-[0.8rem] checked:before:h-[0.8rem] checked:before:leading-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:content-checkIcon checked:before:brightness-0 dark:checked:before:brightness-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300";
`;

const CODE_RADIO_STLYES = `
const radioStyles =
  "appearance-none cursor-pointer w-5 h-5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full relative checked:before:absolute checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:top-1/2 checked:before:left-1/2 checked:before:content-[''] checked:before:w-[0.6em] checked:before:h-[0.6em] checked:before:rounded-full checked:before:bg-black dark:checked:before:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 disabled:cursor-not-allowed disabled:opacity-50";
`;

const CODE_LABEL_COMPONENT = `
export const Label = forwardRef<HTMLLabelElement, ComponentProps<"label">>(
  ({ children, className, ...props }, ref) => (
    <label className={twMerge(labelStyles, className)} ref={ref} {...props}>
      {children}
    </label>
  )
);

Label.displayName = "Label";
`;

const CODE_INPUT_COMPONENT = `
export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input className={twMerge(inputStyles, className)} ref={ref} {...props} />
  )
);

Input.displayName = "Input";
`;

const CODE_CHECKBOX_COMPONENT = `
export const Checkbox = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      className={twMerge(checkboxStyles, className)}
      ref={ref}
      {...props}
    />
  )
);

Checkbox.displayName = "Checkbox";
`;

const CODE_RADIO_COMPONENT = `
export const Radio = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input
      type="radio"
      className={twMerge(radioStyles, className)}
      ref={ref}
      {...props}
    />
  )
);

Radio.displayName = "Radio";
`;

export default function DocumentationFormPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Form</Text>

        <Text tag="h2">
          Form is a group of components made to compose your... Forms
        </Text>

        <Text>
          (They are uncontrolled components, so that means the state is managed
          by the DOM, but you can use them with your favorite library like React
          Hook Forms)
        </Text>
      </div>
      <div className="space-y-5 lg:space-y-8 mt-5">
        <DocumentationSection
          title="Label"
          codeStyle={CODE_LABEL_STLYES}
          codeComponent={CODE_LABEL_COMPONENT}
        >
          <Card className="mt-3">
            <Label>This is a label</Label>
          </Card>
        </DocumentationSection>

        <DocumentationSection
          title="Input"
          codeStyle={CODE_INPUT_STLYES}
          codeComponent={CODE_INPUT_COMPONENT}
        >
          <Card className="mt-3">
            <Input placeholder="This is an input, type something!" />
          </Card>
        </DocumentationSection>

        <DocumentationSection
          title="Checkbox"
          codeStyle={CODE_CHECKBOX_STLYES}
          codeComponent={CODE_CHECKBOX_COMPONENT}
        >
          <Card className="flex items-center justify-start mt-3">
            <Label className="mr-3" htmlFor="test-check">
              This is a checkbox
            </Label>
            <Checkbox id="test-check" />
          </Card>
        </DocumentationSection>

        <DocumentationSection
          title="Radio"
          codeStyle={CODE_RADIO_STLYES}
          codeComponent={CODE_RADIO_COMPONENT}
        >
          <Card className="flex items-center justify-start mt-3 gap-3">
            <div className="flex items-center justify-center">
              <Radio name="test-radio" id="test-radio1" />
              <Label className="ml-2" htmlFor="test-radio1">
                This is a Radio
              </Label>
            </div>
            <div className="flex items-center justify-center">
              <Radio name="test-radio" id="test-radio2" />
              <Label className="ml-2" htmlFor="test-radio2">
                Yes it is
              </Label>
            </div>
            <div className="flex items-center justify-center">
              <Radio name="test-radio" id="test-radio3" />
              <Label className="ml-2" htmlFor="test-radio3">
                Nahh it is not
              </Label>
            </div>
          </Card>
        </DocumentationSection>
      </div>
    </section>
  );
}
