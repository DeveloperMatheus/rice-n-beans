import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Card } from "~/components/Layout";
import {
  Checkbox,
  DatePicker,
  ErrorMessage,
  Input,
  Label,
  Radio,
  Range,
  Select,
  Switch,
} from "~/components/Form";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";

const CODE_LABEL_STLYES = `
const labelStyles = "inline-block font-sans font-bold text-primary select-none";
`;

const CODE_ERROR_STLYES = `
const errorMessageStyles = cva("text-red-500 font-sans");
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

const CODE_SELECT_STLYES = `
const selectStyles =
  "text-black dark:text-white w-full font-sans appearance-none rounded-lg border border-zinc-200 bg-white bg-[url('/icon/arrow.svg')] bg-no-repeat bg-[position:center_right_0.75rem] bg-[length:0.8rem] pl-3 pr-8 py-2 ring-offset-white placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:placeholder:text-zinc-400";
`;

const CODE_SWITCH_STLYES = `
const switchStyles =
  "appearance-none cursor-pointer w-12 h-6 dark:border-zinc-800 rounded-full relative bg-zinc-400 checked:bg-green-700 checked:dark:bg-green-800 before:w-[0.8rem] before:h-[0.8rem] before:bg-white before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:translate-x-1 checked:before:translate-x-[1.95rem] before:transition-all focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed";
`;

const CODE_RANGE_STLYES = `
const rangeStyles =
  "appearance-none focus:outline-none cursor-pointer h-2 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 rounded-full disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:dark:bg-white [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:focus:outline-none [&::-webkit-slider-thumb]:focus:ring-2 [&::-webkit-slider-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:focus:ring-black [&::-webkit-slider-thumb]:focus:dark:ring-zinc-300 [&::-webkit-slider-thumb]:focus:dark:ring-offset-zinc-800 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:dark:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:focus:outline-none [&::-moz-range-thumb]:focus:ring-2 [&::-moz-range-thumb]:focus:ring-offset-2 [&::-moz-range-thumb]:focus:ring-black [&::-moz-range-thumb]:focus:dark:ring-zinc-300 [&::-moz-range-thumb]:focus:dark:ring-offset-zinc-800";
`;

const CODE_DATEPICKER_STLYES = `
const datePickerStyles =
  "appearance-none font-sans w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 ring-offset-white file:border-0 file:bg-transparent file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300";
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

const CODE_ERROR_COMPONENT = `
export const ErrorMessage = forwardRef<
  HTMLParagraphElement,
  ComponentProps<"p">
>(({ children, className, ...props }, ref) => (
  <p
    className={twMerge(errorMessageStyles({ className }))}
    ref={ref}
    {...props}
  >
    {children}
  </p>
));

ErrorMessage.displayName = "ErrorMessage";
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

const CODE_SELECT_COMPONENT = `
export const Select = forwardRef<HTMLSelectElement, ComponentProps<"select">>(
  ({ className, ...props }, ref) => (
    <select className={twMerge(selectStyles, className)} ref={ref} {...props}>
      {props.children}
    </select>
  )
);

Select.displayName = "Select";
`;

const CODE_SWITCH_COMPONENT = `
export const Switch = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      role="switch"
      className={twMerge(switchStyles, className)}
      ref={ref}
      {...props}
    />
  )
);

Switch.displayName = "Switch";
`;

const CODE_RANGE_COMPONENT = `
export const Range = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input
      type="range"
      className={twMerge(rangeStyles, className)}
      ref={ref}
      {...props}
    />
  )
);

Range.displayName = "Range";
`;

const CODE_DATEPICKER_COMPONENT = `
type DatePickerProps = {
  type?: "date" | "time" | "datetime-local";
} & ComponentProps<"input">;
/*
Possible values:
- type="date" -> 2024-02-06 (yyyy-mm-dd)
- type="datetime-local" -> 2024-02-06T02:36 (yyyy-mm-ddThh:mm)
- type="time" -> 02:36 (hh:mm)
*/
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, type = "date", ...props }, ref) => (
    <input
      type={type}
      pattern="\d{4}-\d{2}-\d{2}"
      className={twMerge(datePickerStyles, className)}
      ref={ref}
      {...props}
    />
  )
);

DatePicker.displayName = "DatePicker";
`;

const CODE_ERROR_VIEW = `<ErrorMessage>
  This is an error message to be displayed when your fields are invalid or not satisfying the requirements
</ErrorMessage>
`;

const CODE_CHECKBOX_VIEW = `<div className="flex items-center justify-start">
  <Label className="mr-3" htmlFor="test-check">This is a checkbox</Label>
  <Checkbox id="test-check" />
</div>
`;

const CODE_RADIO_VIEW = `<div className="flex items-center justify-start gap-5">
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
</div>
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

      <DocumentationSection
        title="Label"
        codeStyle={CODE_LABEL_STLYES}
        codeComponent={CODE_LABEL_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Label>This is a label</Label>
          </TabPanel>
          <TabPanel id="code">
            <code>{`<Label>This is a label</Label>`}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Error"
        codeStyle={CODE_ERROR_STLYES}
        codeComponent={CODE_ERROR_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <ErrorMessage>
              This is an error message to be displayed when your fields are
              invalid or not satisfying the requirements
            </ErrorMessage>
          </TabPanel>
          <TabPanel id="code">
            <code className="whitespace-pre">{CODE_ERROR_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Input"
        codeStyle={CODE_INPUT_STLYES}
        codeComponent={CODE_INPUT_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Input placeholder="This is an input, type something!" />
          </TabPanel>
          <TabPanel id="code">
            <code>
              {`<Input placeholder="This is an input, type something!" />`}
            </code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Checkbox"
        codeStyle={CODE_CHECKBOX_STLYES}
        codeComponent={CODE_CHECKBOX_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="flex items-center justify-start">
              <Label className="mr-3" htmlFor="test-check">
                This is a checkbox
              </Label>
              <Checkbox id="test-check" />
            </div>
          </TabPanel>
          <TabPanel id="code">
            <code className="whitespace-pre">{CODE_CHECKBOX_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Radio"
        codeStyle={CODE_RADIO_STLYES}
        codeComponent={CODE_RADIO_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="flex items-center justify-start gap-5">
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
            </div>
          </TabPanel>
          <TabPanel id="code">
            <code className="whitespace-pre">{CODE_RADIO_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Select"
        codeStyle={CODE_SELECT_STLYES}
        codeComponent={CODE_SELECT_COMPONENT}
      >
        <Card className="mt-3">
          <Select>
            <option defaultChecked hidden>
              Select an option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </Card>
      </DocumentationSection>

      <DocumentationSection
        title="Switch"
        codeStyle={CODE_SWITCH_STLYES}
        codeComponent={CODE_SWITCH_COMPONENT}
      >
        <Card className="flex items-center justify-start mt-3">
          <Label htmlFor="test-switch" className="mr-2">
            This is a switch
          </Label>
          <Switch id="test-switch" />
        </Card>
      </DocumentationSection>

      <DocumentationSection
        title="Range"
        codeStyle={CODE_RANGE_STLYES}
        codeComponent={CODE_RANGE_COMPONENT}
      >
        <Card className="mt-3">
          <Range />
        </Card>
      </DocumentationSection>

      <DocumentationSection
        title="Date Picker"
        codeStyle={CODE_DATEPICKER_STLYES}
        codeComponent={CODE_DATEPICKER_COMPONENT}
      >
        <Card className="mt-3">
          <DatePicker min="1900-01-01" className="w-fit" />
        </Card>
      </DocumentationSection>
    </section>
  );
}
