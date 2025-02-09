export const DATEPICKER_CODE = `import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const datePickerStyles =
  'appearance-none font-sans w-full rounded-lg border border-default bg-scaffold px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-default disabled:cursor-not-allowed disabled:opacity-50'

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

export { DatePicker }
`
