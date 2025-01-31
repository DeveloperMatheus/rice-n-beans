import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

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

export { Button }
