import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const inputStyles = cva(
  'appearance-none font-sans w-full rounded-lg border border-default bg-scaffold px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      isInvalid: {
        true: 'focus-visible:ring-error'
      }
    }
  }
)

const Input = ({
  className,
  isInvalid,
  ...props
}: ComponentProps<'input'> & VariantProps<typeof inputStyles>) => (
  <input
    className={twMerge(inputStyles({ className, isInvalid }))}
    {...props}
  />
)

Input.displayName = 'Input'

export { Input }
