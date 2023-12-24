import { forwardRef } from 'react'

import { formLabelStyles } from './styles'
import { FormLabelProps } from './types'

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, className, ...props }, ref) => (
    <label className={formLabelStyles({ className })} ref={ref} {...props}>
      {children}
    </label>
  )
)

FormLabel.displayName = 'FormLabel'
