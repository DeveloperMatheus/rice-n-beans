import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const labelStyles = tv({
  base: 'text-scaffold-contrast inline-block font-bold select-none'
})

const Label = ({ className, ...props }: ComponentProps<'label'>) => (
  <label className={labelStyles({ className })} {...props} />
)

export { Label }
