import { VariantProps, cva } from 'class-variance-authority'
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

const buttonStyles = cva(
  'appearance-none font-sans rounded-lg disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-contrast hover:bg-primary/90 active:bg-primary/85',
        destructive:
          'bg-error text-white dark:text-contrast hover:bg-error/90 active:bg-error/85',
        outline:
          'border border-default text-contrast bg-accent hover:bg-accent/90 active:text-contrast/85',
        secondary:
          'bg-secondary text-contrast hover:bg-secondary/90 active:bg-secondary/80',
        ghost:
          'bg-transparent text-contrast hover:bg-secondary/90 active:bg-secondary/80',
        link: 'text-contrast underline-offset-4 hover:underline active:text-contrast/85'
      },
      size: {
        default: 'min-h-[2.625rem] px-3 py-2',
        sm: 'min-h-9 rounded-md px-3',
        lg: 'min-h-11 rounded-md px-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const cardStyles = 'bg-accent border border-default rounded-lg p-3 shadow-sm'

/* --- Badge --- */
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

/* --- Button --- */
const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonStyles>) => (
  <button
    className={twMerge(buttonStyles({ className, variant, size }))}
    {...props}
  >
    {children}
  </button>
)

Button.displayName = 'Button'

/* --- Card --- */
const Card = ({ children, className, ...props }: ComponentProps<'div'>) => (
  <div className={twMerge(cardStyles, className)} {...props}>
    {children}
  </div>
)

Card.displayName = 'Card'

export { Badge, Button, Card }
