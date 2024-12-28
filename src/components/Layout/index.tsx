import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const badgeStyles = cva(
  'px-2 py-1 inline-block text-center font-bold text-sm min-w-[3rem] min-h-[1.3rem] rounded-full select-none',
  {
    variants: {
      variant: {
        default:
          'text-zinc-50 dark:text-zinc-900 hover:bg-zinc-900/90 bg-zinc-900 dark:bg-zinc-300',
        destructive:
          'bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90',
        outline:
          'border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50',
        secondary:
          'bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80'
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
          'bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-300 dark:text-zinc-900 dark:hover:bg-zinc-50/90 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300',
        destructive:
          'bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-red-900',
        outline:
          'border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300',
        secondary:
          'bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300',
        ghost:
          'text-black dark:text-white hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300',
        link: 'text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50'
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

const cardStyles =
  'bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 shadow-sm'

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
