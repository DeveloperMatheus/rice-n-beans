import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const badgeStyles = cva(
  'inline-block rounded-full px-2.5 py-0.5 text-center text-sm font-bold select-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-contrast hover:bg-primary/90',
        destructive: 'bg-error text-error-contrast hover:bg-error/90',
        outline:
          'border-default text-contrast bg-scaffold hover:bg-scaffold/90 border',
        secondary: 'bg-secondary text-secondary-contrast hover:bg-secondary/70',
        success: 'bg-success text-success-contrast hover:bg-success/70'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const Badge = ({
  children,
  className,
  variant,
  ...props
}: ComponentProps<'div'> & VariantProps<typeof badgeStyles>) => (
  <div className={twMerge(badgeStyles({ className, variant }))} {...props}>
    {children}
  </div>
)

Badge.displayName = 'Badge'

export { Badge }
