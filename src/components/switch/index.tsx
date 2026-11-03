import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const switchStyles = tv({
  base: 'focus-ring disabled-state relative min-h-6 min-w-10 cursor-pointer appearance-none rounded-full border border-line bg-canvas transition-colors checked:border-selected checked:bg-selected before:absolute before:top-1/2 before:left-1 before:size-2.5 before:-translate-y-1/2 before:rounded-full before:bg-canvas-fg before:transition-transform motion-reduce:before:transition-none checked:before:translate-x-5 checked:before:bg-selected-fg'
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
