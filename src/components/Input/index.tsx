import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const inputStyles = tv({
  base: 'text-scaffold-contrast border-default bg-scaffold placeholder:placeholder-muted focus-visible:ring-default w-full appearance-none rounded-lg border px-3 py-2 file:border-0 file:bg-transparent file:font-medium focus-visible:ring-2 focus-visible:outline-hidden focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    isInvalid: {
      true: 'focus-visible:ring-error'
    }
  }
})

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
