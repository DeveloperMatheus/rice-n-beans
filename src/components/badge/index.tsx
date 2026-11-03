import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const badgeStyles = tv({
  base: 'inline-block rounded-full px-2.5 py-0.5 text-center text-sm font-bold select-none',
  variants: {
    variant: {
      default: 'bg-primary text-primary-contrast',
      destructive: 'bg-error text-error-contrast',
      outline: 'border-default text-scaffold-contrast bg-scaffold border',
      secondary: 'bg-secondary text-secondary-contrast',
      success: 'bg-success text-success-contrast'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

const Badge = ({
  className,
  variant,
  ...props
}: ComponentProps<'span'> & VariantProps<typeof badgeStyles>) => (
  <span className={badgeStyles({ className, variant })} {...props} />
)

export { Badge }
