import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const separatorStyles = cva('bg-muted shrink-0', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px'
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

const Separator = ({
  children,
  className,
  orientation,
  ...props
}: Omit<ComponentProps<'div'>, 'role' | 'aria-orientation'> &
  VariantProps<typeof separatorStyles>) => (
  <div
    role="separator"
    aria-orientation={orientation ?? 'horizontal'}
    className={twMerge(separatorStyles({ orientation, className }))}
    {...props}
  ></div>
)

Separator.displayName = 'Separator'

export { Separator }
