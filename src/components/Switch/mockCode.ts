export const SWITCH_CODE = `import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const switchStyles =
  'border-default bg-scaffold checked:bg-success before:bg-scaffold-contrast relative min-h-6 min-w-10 cursor-pointer appearance-none rounded-full border before:absolute before:top-1/2 before:left-1 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:transition-all checked:before:left-6 checked:before:bg-white disabled:cursor-not-allowed disabled:opacity-30'

const Switch = ({ className, ...props }: ComponentProps<'input'>) => (
  <input
    type="checkbox"
    role="switch"
    className={twMerge(switchStyles, className)}
    {...props}
  />
)

Switch.displayName = 'Switch'

export { Switch }
`
