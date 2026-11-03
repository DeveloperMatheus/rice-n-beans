import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const labelStyles = tv({
  base: 'inline-block font-bold text-canvas-fg select-none'
})

const Label = ({ className, ...props }: ComponentProps<'label'>) => (
  <label className={labelStyles({ className })} {...props} />
)

export { Label }
