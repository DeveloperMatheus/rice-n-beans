import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const radioStyles = tv({
  base: 'focus-ring disabled-state relative size-5 cursor-pointer appearance-none rounded-full border border-line bg-canvas checked:border-selected checked:bg-selected checked:before:absolute checked:before:inset-1 checked:before:rounded-full checked:before:bg-selected-fg'
})

const Radio = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="radio" className={radioStyles({ className })} {...props} />
)

export { Radio }
