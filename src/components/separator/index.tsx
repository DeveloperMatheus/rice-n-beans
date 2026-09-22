import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const separatorStyles = tv({
  base: 'bg-muted shrink-0',
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
    className={separatorStyles({ className, orientation })}
    {...props}
  ></div>
)

Separator.displayName = 'Separator'

export { Separator }
