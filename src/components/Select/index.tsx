import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'bg-image': ['bg-arrow-icon'],
      'bg-color': ['bg-scaffold']
    }
  }
})

const selectStyles = cva(
  'text-contrast border-default placeholder:placeholder-muted focus-visible:ring-default bg-scaffold bg-arrow-icon w-full appearance-none rounded-lg border bg-[length:1.6rem] bg-[position:center_right_0.75rem] bg-no-repeat py-2 pr-8 pl-3 focus-visible:ring-2 focus-visible:outline-hidden focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
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
