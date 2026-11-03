import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const switchStyles = tv({
  base: 'border-default bg-scaffold checked:bg-success before:bg-scaffold-contrast relative min-h-6 min-w-10 cursor-pointer appearance-none rounded-full border before:absolute before:top-1/2 before:left-1 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:transition-transform motion-reduce:before:transition-none checked:before:translate-x-5 checked:before:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-30'
})

const Switch = ({ className, ...props }: ComponentProps<'input'>) => (
  <input
    type="checkbox"
    role="switch"
    className={switchStyles({ className })}
    {...props}
  />
)

export { Switch }
