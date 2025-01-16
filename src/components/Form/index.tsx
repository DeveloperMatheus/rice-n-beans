import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

// lembrete: ajustar border vs offset do tailwind
const inputStyles = cva(
  'appearance-none font-sans w-full rounded-lg border border-default bg-scaffold px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:placeholder-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      isInvalid: {
        true: 'focus-visible:ring-error'
      }
    }
  }
)
const labelStyles = 'inline-block font-sans text-contrast font-bold select-none'
const checkboxStyles =
  'relative bg-scaffold rounded-md min-h-5 min-w-5 cursor-pointer appearance-none border border-default checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:w-[1rem] checked:before:h-[1rem] checked:before:leading-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:content-checkmark-icon checked:before:brightness-0 dark:checked:before:brightness-200'
const radioStyles =
  "appearance-none cursor-pointer min-w-5 min-h-5 bg-scaffold border border-default rounded-full relative checked:before:absolute checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:top-1/2 checked:before:left-1/2 checked:before:content-[''] checked:before:w-[0.6rem] checked:before:h-[0.6rem] checked:before:rounded-full checked:before:bg-contrast disabled:cursor-not-allowed disabled:opacity-50"
const selectStyles = cva(
  'text-contrast w-full font-sans appearance-none rounded-lg border border-default bg-white dark:bg-scaffold bg-arrow-icon bg-no-repeat bg-[position:center_right_0.75rem] bg-[length:1.6rem] pl-3 pr-8 py-2 placeholder:placeholder-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      isInvalid: {
        true: 'focus-visible:ring-error'
      }
    }
  }
)
const switchStyles =
  'appearance-none cursor-pointer min-w-10 min-h-6 rounded-full relative border border-default bg-scaffold checked:bg-success before:w-2.5 before:h-2.5 before:bg-contrast checked:before:bg-white before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1 before:checked:left-6 before:transition-all disabled:opacity-30 disabled:cursor-not-allowed'
const rangeStyles =
  'appearance-none focus:outline-none cursor-pointer h-2 border border-default bg-scaffold rounded-full disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-contrast [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:focus:outline-none [&::-webkit-slider-thumb]:focus:ring-2 [&::-webkit-slider-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:focus:ring-default [&::-webkit-slider-thumb]:focus:dark:ring-offset-scaffold [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-contrast [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:focus:outline-none [&::-moz-range-thumb]:focus:ring-2 [&::-moz-range-thumb]:focus:ring-offset-2 [&::-moz-range-thumb]:focus:ring-default [&::-moz-range-thumb]:focus:dark:ring-offset-scaffold'
const datePickerStyles =
  'appearance-none font-sans w-full rounded-lg border border-default bg-scaffold px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:placeholder-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-default disabled:cursor-not-allowed disabled:opacity-50'
const errorMessageStyles = cva('text-error font-sans')

/* --- Input --- */
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

/* --- Label --- */
const Label = ({ children, className, ...props }: ComponentProps<'label'>) => (
  <label className={twMerge(labelStyles, className)} {...props}>
    {children}
  </label>
)

Label.displayName = 'Label'

/* --- Checkbox --- */
const Checkbox = ({ className, ...props }: ComponentProps<'input'>) => (
  <input
    type="checkbox"
    className={twMerge(checkboxStyles, className)}
    {...props}
  />
)

Checkbox.displayName = 'Checkbox'

/* --- Radio --- */
const Radio = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="radio" className={twMerge(radioStyles, className)} {...props} />
)

Radio.displayName = 'Radio'

/* --- Select --- */
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

/* --- Switch --- */
const Switch = ({ className, ...props }: ComponentProps<'input'>) => (
  <input
    type="checkbox"
    role="switch"
    className={twMerge(switchStyles, className)}
    {...props}
  />
)

Switch.displayName = 'Switch'

/* --- Range --- */
const Range = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="range" className={twMerge(rangeStyles, className)} {...props} />
)

Range.displayName = 'Range'

/* --- DatePicker --- */
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

/* --- ErrorMessage --- */
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

export {
  Input,
  Label,
  Checkbox,
  Radio,
  Select,
  Switch,
  Range,
  DatePicker,
  ErrorMessage
}
