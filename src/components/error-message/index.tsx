import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const errorMessageStyles = tv({
  base: 'text-error'
})

const ErrorMessage = ({
  children,
  className,
  ...props
}: ComponentProps<'p'>) => (
  <p className={errorMessageStyles({ className })} {...props}>
    {children}
  </p>
)

ErrorMessage.displayName = 'ErrorMessage'

export { ErrorMessage }
