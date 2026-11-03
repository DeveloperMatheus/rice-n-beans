import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const datePickerStyles = tv({
  base: 'focus-ring disabled-state h-control-md w-full appearance-none rounded-default border border-line bg-canvas px-inset-sm text-canvas-fg'
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
