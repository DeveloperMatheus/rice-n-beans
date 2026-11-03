import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const selectStyles = tv(
  {
    base: 'text-scaffold-contrast border-default placeholder:placeholder-muted focus-visible:ring-default bg-scaffold bg-arrow-icon w-full appearance-none rounded-default border bg-size-[1.6rem] bg-position-[center_right_0.75rem] bg-no-repeat py-2 pr-8 pl-3 focus-visible:ring-2 focus-visible:outline-hidden focus-visible:outline-offset-0 aria-invalid:focus-visible:ring-error disabled:cursor-not-allowed disabled:opacity-50'
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

type SelectProps = ComponentProps<'select'> & {
  isInvalid?: boolean
}

const Select = ({ className, isInvalid, ...props }: SelectProps) => (
  <select
    className={selectStyles({ className })}
    aria-invalid={isInvalid || undefined}
    {...props}
  />
)

export { Select }
