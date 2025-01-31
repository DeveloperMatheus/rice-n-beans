import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const selectStyles = cva(
  'text-contrast w-full font-sans appearance-none rounded-lg border border-default bg-white dark:bg-scaffold bg-arrow-icon bg-no-repeat bg-[position:center_right_0.75rem] bg-[length:1.6rem] pl-3 pr-8 py-2 placeholder:placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      isInvalid: {
        true: 'focus-visible:ring-error'
      }
    }
  }
)

const Select = ({
  className,
  isInvalid,
  children,
  ...props
}: ComponentProps<'select'> & VariantProps<typeof selectStyles>) => (
  <select
    className={twMerge(selectStyles({ className, isInvalid }))}
    {...props}
  >
    {children}
  </select>
)

Select.displayName = 'Select'

export { Select }
