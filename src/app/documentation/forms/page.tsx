import { Text } from '~/components/Typography'
import { DocumentationSection } from '../components/DocumentationSection'
import {
  Checkbox,
  DatePicker,
  ErrorMessage,
  Input,
  Label,
  Radio,
  Range,
  Select,
  Switch
} from '~/components/Form'
import { Tab, TabList, TabPanel, Tabs } from '~/components/Tabs'

const CODE_LABEL_STLYES = `const labelStyles = 'inline-block font-sans text-contrast font-bold select-none'
`

const CODE_ERROR_STLYES = `const errorMessageStyles = cva('text-error font-sans')
`

const CODE_INPUT_STLYES = `const inputStyles = cva(
  'appearance-none font-sans w-full rounded-lg border border-muted bg-scaffold px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      isInvalid: {
        true: 'focus-visible:ring-error'
      }
    }
  }
)
`

const CODE_CHECKBOX_STLYES = `const checkboxStyles = 'relative bg-scaffold rounded-md min-h-5 min-w-5 cursor-pointer appearance-none border border-muted checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:w-[1rem] checked:before:h-[1rem] checked:before:leading-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:content-checkmark-icon checked:before:brightness-0 dark:checked:before:brightness-200'
`

const CODE_RADIO_STLYES = `const radioStyles = "appearance-none cursor-pointer min-w-5 min-h-5 bg-scaffold border border-muted rounded-full relative checked:before:absolute checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:top-1/2 checked:before:left-1/2 checked:before:content-[''] checked:before:w-[0.6rem] checked:before:h-[0.6rem] checked:before:rounded-full checked:before:bg-contrast disabled:cursor-not-allowed disabled:opacity-50"
`

const CODE_SELECT_STLYES = `const selectStyles = cva(
  'text-contrast w-full font-sans appearance-none rounded-lg border border-muted bg-white dark:bg-scaffold bg-arrow-icon bg-no-repeat bg-[position:center_right_0.75rem] bg-[length:1.6rem] pl-3 pr-8 py-2 placeholder:placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      isInvalid: {
        true: 'focus-visible:ring-error'
      }
    }
  }
)
`

const CODE_SWITCH_STLYES = `const switchStyles = 'appearance-none cursor-pointer min-w-10 min-h-6 rounded-full relative border border-muted bg-scaffold checked:bg-success before:w-2.5 before:h-2.5 before:bg-contrast checked:before:bg-white before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1 before:checked:left-6 before:transition-all disabled:opacity-30 disabled:cursor-not-allowed'
`

const CODE_RANGE_STLYES = `const rangeStyles = 'appearance-none focus:outline-none cursor-pointer h-2 border border-muted bg-scaffold rounded-full disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-contrast [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:focus:outline-none [&::-webkit-slider-thumb]:focus:ring-2 [&::-webkit-slider-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:focus:ring-default [&::-webkit-slider-thumb]:focus:dark:ring-offset-scaffold [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-contrast [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:focus:outline-none [&::-moz-range-thumb]:focus:ring-2 [&::-moz-range-thumb]:focus:ring-offset-2 [&::-moz-range-thumb]:focus:ring-default [&::-moz-range-thumb]:focus:dark:ring-offset-scaffold'
`

const CODE_DATEPICKER_STLYES = `const datePickerStyles = 'appearance-none font-sans w-full rounded-lg border border-muted bg-scaffold px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-default disabled:cursor-not-allowed disabled:opacity-50'
`

const CODE_LABEL_COMPONENT = `
const Label = ({ children, className, ...props }: ComponentProps<'label'>) => (
  <label className={twMerge(labelStyles, className)} {...props}>
    {children}
  </label>
)

Label.displayName = 'Label'
`

const CODE_ERROR_COMPONENT = `
const ErrorMessage = ({
  children,
  className,
  ...props
}: ComponentProps<'p'>) => (
  <p className={twMerge(errorMessageStyles({ className }))} {...props}>
    {children}
  </p>
)

ErrorMessage.displayName = 'ErrorMessage'
`

const CODE_INPUT_COMPONENT = `
const Input = ({
  className,
  isInvalid,
  ...props
}: ComponentProps<'input'> & VariantProps<typeof inputStyles>) => (
  <input
    className={twMerge(inputStyles({ className, isInvalid }))}
    {...props}
  />
)

Input.displayName = 'Input'
`

const CODE_CHECKBOX_COMPONENT = `
const Checkbox = ({ className, ...props }: ComponentProps<'input'>) => (
  <input
    type="checkbox"
    className={twMerge(checkboxStyles, className)}
    {...props}
  />
)

Checkbox.displayName = 'Checkbox'
`

const CODE_RADIO_COMPONENT = `
const Radio = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="radio" className={twMerge(radioStyles, className)} {...props} />
)

Radio.displayName = 'Radio'
`

const CODE_SELECT_COMPONENT = `
const Select = ({
  className,
  isInvalid,
  children,
  ...props
}: ComponentProps<'select'> & VariantProps<typeof selectStyles>) => (
  <select
    className={twMerge(selectStyles({ className, isInvalid }))}
    {...props}
  >
    {children}
  </select>
)

Select.displayName = 'Select'
`

const CODE_SWITCH_COMPONENT = `
const Switch = ({ className, ...props }: ComponentProps<'input'>) => (
  <input
    type="checkbox"
    role="switch"
    className={twMerge(switchStyles, className)}
    {...props}
  />
)

Switch.displayName = 'Switch'
`

const CODE_RANGE_COMPONENT = `
const Range = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="range" className={twMerge(rangeStyles, className)} {...props} />
)

Range.displayName = 'Range'
`

const CODE_DATEPICKER_COMPONENT = `
type DatePickerProps = {
  type?: 'date' | 'time' | 'datetime-local'
} & ComponentProps<'input'>
/*
Possible values:
- type="date" -> 2024-02-06 (yyyy-mm-dd)
- type="datetime-local" -> 2024-02-06T02:36 (yyyy-mm-ddThh:mm)
- type="time" -> 02:36 (hh:mm)
*/
const DatePicker = ({
  className,
  type = 'date',
  ...props
}: DatePickerProps) => (
  <input
    type={type}
    pattern="\d{4}-\d{2}-\d{2}"
    className={twMerge(datePickerStyles, className)}
    {...props}
  />
)

DatePicker.displayName = 'DatePicker'
`

const CODE_ERROR_VIEW = `<ErrorMessage>
  This is an error message to be displayed when your fields are invalid or not satisfying the requirements
</ErrorMessage>
`

const CODE_INPUT_VIEW = `<div className="space-y-3">
  <Input placeholder="This is an input, type something!" />
  <Input placeholder="Oops! I have an error!" isInvalid />
</div>
`

const CODE_CHECKBOX_VIEW = `<div className="flex items-center justify-start">
  <Label className="mr-3" htmlFor="test-check">This is a checkbox</Label>
  <Checkbox id="test-check" />
</div>
`

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
`

const CODE_SELECT_VIEW = `<Select>
  <option defaultChecked hidden>
    Select an option
  </option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>`

const CODE_SWITCH_VIEW = `<div className="flex items-center justify-start">
  <Label htmlFor="test-switch" className="mr-2">
    This is a switch
  </Label>
  <Switch id="test-switch" />
</div>`

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
          <TabPanel id="code" className="overflow-x-auto">
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
          <TabPanel id="code" className="overflow-x-auto">
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
            <div className="space-y-3">
              <Input placeholder="This is an input, type something!" />
              <Input placeholder="Oops! I have an error!" isInvalid />
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_INPUT_VIEW}</code>
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
          <TabPanel id="code" className="overflow-x-auto">
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
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_RADIO_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Select"
        codeStyle={CODE_SELECT_STLYES}
        codeComponent={CODE_SELECT_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Label htmlFor="input-select">This is a select</Label>
            <Select id="input-select">
              <option defaultChecked hidden>
                Select an option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Select>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_SELECT_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Switch"
        codeStyle={CODE_SWITCH_STLYES}
        codeComponent={CODE_SWITCH_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="flex items-center justify-start">
              <Label htmlFor="test-switch" className="mr-2">
                This is a switch
              </Label>
              <Switch id="test-switch" />
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_SWITCH_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Range"
        codeStyle={CODE_RANGE_STLYES}
        codeComponent={CODE_RANGE_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Label htmlFor="input-range">Range</Label>
            <Range id="input-range" />
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{`<Range />`}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>

      <DocumentationSection
        title="Date Picker"
        codeStyle={CODE_DATEPICKER_STLYES}
        codeComponent={CODE_DATEPICKER_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <Label htmlFor="input-date-picker">Date Picker</Label>
            <DatePicker
              id="input-date-picker"
              min="1991-01-01"
              className="w-fit"
            />
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{`<DatePicker min="1900-01-01" className="w-fit" />`}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  )
}
