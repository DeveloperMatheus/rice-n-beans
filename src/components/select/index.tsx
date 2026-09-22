import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const selectStyles = tv(
  {
    base: 'text-scaffold-contrast border-default placeholder:placeholder-muted focus-visible:ring-default bg-scaffold bg-arrow-icon w-full appearance-none rounded-lg border bg-size-[1.6rem] bg-position-[center_right_0.75rem] bg-no-repeat py-2 pr-8 pl-3 focus-visible:ring-2 focus-visible:outline-hidden focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
    variants: {
      isInvalid: {
        true: 'focus-visible:ring-error'
      }
    }
  },
  {
    twMergeConfig: {
      extend: {
        classGroups: {
          'bg-image': ['bg-arrow-icon'],
          'bg-color': ['bg-scaffold']
        }
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
  <select className={selectStyles({ className, isInvalid })} {...props}>
    {children}
  </select>
)

Select.displayName = 'Select'

export { Select }
