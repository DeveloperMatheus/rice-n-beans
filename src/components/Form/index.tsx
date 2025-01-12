import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

// lembrete: ajustar border vs offset do tailwind
const inputStyles = cva(
  'appearance-none font-sans w-full rounded-lg border border-light bg-white px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:placeholder-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-light-primary focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark dark:bg-dark-primary dark:placeholder:placeholder-dark dark:focus-visible:ring-white',
  {
    variants: {
      isInvalid: {
        true: 'focus-visible:ring-light-error dark:focus-visible:ring-dark-error'
      }
    }
  }
)
const labelStyles =
  'inline-block font-sans text-light dark:text-dark font-bold select-none'
const checkboxStyles =
  'relative bg-white dark:bg-dark-primary rounded-md min-h-5 min-w-5 cursor-pointer appearance-none border border-light dark:border-dark checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:w-[1rem] checked:before:h-[1rem] checked:before:leading-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:content-checkmark-icon checked:before:brightness-0 dark:checked:before:brightness-200'
const radioStyles =
  "appearance-none cursor-pointer min-w-5 min-h-5 bg-white dark:bg-dark-primary border border-light dark:border-dark rounded-full relative checked:before:absolute checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:top-1/2 checked:before:left-1/2 checked:before:content-[''] checked:before:w-[0.6rem] checked:before:h-[0.6rem] checked:before:rounded-full checked:before:bg-black dark:checked:before:bg-white disabled:cursor-not-allowed disabled:opacity-50"
const selectStyles =
  'text-black dark:text-white w-full font-sans appearance-none rounded-lg border border-light bg-white bg-arrow-icon bg-no-repeat bg-[position:center_right_0.75rem] bg-[length:1.6rem] pl-3 pr-8 py-2 ring-offset-white placeholder:placeholder-light disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark dark:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-light focus:ring-offset-2 dark:ring-offset-dark dark:focus:ring-dark dark:placeholder-dark'
const switchStyles =
  'appearance-none cursor-pointer min-w-10 min-h-6 rounded-full relative border border-light dark:border-dark bg-white dark:bg-dark-primary checked:bg-light-success checked:dark:bg-dark-success before:w-2.5 before:h-2.5 before:bg-light-primary dark:before:bg-white checked:before:bg-white before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1 before:checked:left-6 before:transition-all disabled:opacity-30 disabled:cursor-not-allowed'
const rangeStyles =
  'appearance-none focus:outline-none cursor-pointer h-2 border border-light dark:bg-dark-primary dark:border-dark rounded-full disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-light-primary [&::-webkit-slider-thumb]:dark:bg-white [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:focus:outline-none [&::-webkit-slider-thumb]:focus:ring-2 [&::-webkit-slider-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:focus:ring-light [&::-webkit-slider-thumb]:focus:dark:ring-dark [&::-webkit-slider-thumb]:focus:dark:ring-offset-dark [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-light-primary [&::-moz-range-thumb]:dark:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:focus:outline-none [&::-moz-range-thumb]:focus:ring-2 [&::-moz-range-thumb]:focus:ring-offset-2 [&::-moz-range-thumb]:focus:ring-light [&::-moz-range-thumb]:focus:dark:ring-dark [&::-moz-range-thumb]:focus:dark:ring-offset-dark'
const datePickerStyles =
  'appearance-none font-sans w-full rounded-lg border border-light dark:border-dark bg-white dark:bg-dark-primary px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:placeholder-light dark:placeholder:placeholder-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-offset-white dark:ring-offset-dark focus-visible:ring-light dark:focus-visible:ring-dark'
const errorMessageStyles = cva('text-red-500 font-sans')

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
  children,
  ...props
}: ComponentProps<'select'>) => (
  <select className={twMerge(selectStyles, className)} {...props}>
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
