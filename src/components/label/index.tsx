import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const labelStyles = tv({
  base: 'text-scaffold-contrast inline-block font-bold select-none'
})

const Label = ({ children, className, ...props }: ComponentProps<'label'>) => (
  <label className={labelStyles({ className })} {...props}>
    {children}
  </label>
)

Label.displayName = 'Label'

export { Label }
