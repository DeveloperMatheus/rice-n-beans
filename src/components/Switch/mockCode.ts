export const SWITCH_CODE = `import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const switchStyles =
  'appearance-none cursor-pointer min-w-10 min-h-6 rounded-full relative border border-default bg-scaffold checked:bg-success before:w-2.5 before:h-2.5 before:bg-contrast checked:before:bg-white before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1 checked:before:left-6 before:transition-all disabled:opacity-30 disabled:cursor-not-allowed'

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
