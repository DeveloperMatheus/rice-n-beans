import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const errorMessageStyles = tv({
  base: 'text-fg-error'
})

const ErrorMessage = ({ className, ...props }: ComponentProps<'p'>) => (
  <p className={errorMessageStyles({ className })} {...props} />
)

export { ErrorMessage }
