import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const errorMessageStyles = 'text-error'

const ErrorMessage = ({
  children,
  className,
  ...props
}: ComponentProps<'p'>) => (
  <p className={twMerge(errorMessageStyles, className)} {...props}>
    {children}
  </p>
)

ErrorMessage.displayName = 'ErrorMessage'

export { ErrorMessage }
