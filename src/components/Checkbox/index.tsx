import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const checkboxStyles =
  'relative bg-scaffold rounded-md min-h-5 min-w-5 cursor-pointer appearance-none border border-default checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:w-[1rem] checked:before:h-[1rem] checked:before:leading-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:content-checkmark-icon checked:before:brightness-0 dark:checked:before:brightness-200'

const Checkbox = ({ className, ...props }: ComponentProps<'input'>) => (
  <input
    type="checkbox"
    className={twMerge(checkboxStyles, className)}
    {...props}
  />
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
