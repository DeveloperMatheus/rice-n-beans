import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const separatorStyles = tv({
  base: 'shrink-0 bg-line',
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
  className,
  orientation,
  ...props
}: Omit<ComponentProps<'div'>, 'role' | 'aria-orientation' | 'children'> &
  VariantProps<typeof separatorStyles>) => (
  <div
    role="separator"
    aria-orientation={orientation === 'vertical' ? 'vertical' : undefined}
    className={separatorStyles({ className, orientation })}
    {...props}
  />
)

export { Separator }
