import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const checkboxStyles = tv({
  base: 'focus-ring disabled-state relative size-5 cursor-pointer appearance-none rounded-check border border-line bg-canvas checked:border-selected checked:bg-selected checked:before:absolute checked:before:inset-px checked:before:bg-selected-fg checked:before:icon-check'
})

const Checkbox = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="checkbox" className={checkboxStyles({ className })} {...props} />
)

export { Checkbox }
