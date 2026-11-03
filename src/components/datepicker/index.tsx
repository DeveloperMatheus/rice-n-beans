import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const datePickerStyles = tv({
  base: 'border-default bg-scaffold placeholder:placeholder-muted focus-visible:ring-default w-full appearance-none rounded-default border px-3 py-2 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:outline-hidden aria-invalid:focus-visible:ring-error disabled:cursor-not-allowed disabled:opacity-50'
})

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
  <input type={type} className={datePickerStyles({ className })} {...props} />
)

export { DatePicker }
