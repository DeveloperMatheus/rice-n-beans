import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const rangeStyles = tv({
  base: 'focus-ring disabled-state range-field'
})

const Range = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="range" className={rangeStyles({ className })} {...props} />
)

export { Range }
