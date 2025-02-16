import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const checkboxStyles =
  'bg-scaffold border-default relative min-h-5 min-w-5 cursor-pointer appearance-none rounded-md border checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:h-[1rem] checked:before:w-[1rem] checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:leading-none checked:before:brightness-0 checked:before:content-[var(--checkmark-icon)] disabled:cursor-not-allowed disabled:opacity-50 dark:checked:before:brightness-200'

const Checkbox = ({ className, ...props }: ComponentProps<'input'>) => (
  <input
    type="checkbox"
    className={twMerge(checkboxStyles, className)}
    {...props}
  />
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
