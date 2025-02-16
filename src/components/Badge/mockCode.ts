export const BADGE_CODE = `import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const badgeStyles = cva(
  'inline-block rounded-full px-2.5 py-0.5 text-center text-sm font-bold select-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-contrast hover:bg-primary/90',
        destructive: 'bg-error dark:text-contrast hover:bg-error/90 text-white',
        outline:
          'border-default text-contrast bg-scaffold hover:bg-scaffold/90 border',
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
}: ComponentProps<'div'> & VariantProps<typeof badgeStyles>) => (
  <div className={twMerge(badgeStyles({ className, variant }))} {...props}>
    {children}
  </div>
)

Badge.displayName = 'Badge'

export { Badge }
`
