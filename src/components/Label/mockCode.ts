export const LABEL_CODE = `import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const labelStyles = 'text-scaffold-contrast inline-block font-bold select-none'

const Label = ({ children, className, ...props }: ComponentProps<'label'>) => (
  <label className={twMerge(labelStyles, className)} {...props}>
    {children}
  </label>
)

Label.displayName = 'Label'

export { Label }
`
