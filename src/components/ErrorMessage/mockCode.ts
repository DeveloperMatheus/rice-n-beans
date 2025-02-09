export const ERROR_CODE = `import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const errorMessageStyles = 'text-error font-sans'

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
`
