import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const badgeStyles = cva(
  'px-2 py-1 inline-block text-center font-bold text-sm min-w-[3rem] min-h-[1.3rem] rounded-full select-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-contrast hover:bg-primary/90',
        destructive: 'bg-error text-white dark:text-contrast hover:bg-error/90',
        outline:
          'border border-default text-contrast bg-scaffold hover:bg-scaffold/90',
        secondary: 'bg-secondary text-contrast hover:bg-secondary/70'
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
}: ComponentProps<'span'> & VariantProps<typeof badgeStyles>) => (
  <span className={twMerge(badgeStyles({ className, variant }))} {...props}>
    {children}
  </span>
)

Badge.displayName = 'Badge'

export { Badge }
