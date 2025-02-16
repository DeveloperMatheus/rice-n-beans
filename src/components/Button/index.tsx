import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(
  'inline-flex cursor-pointer appearance-none items-center justify-center rounded-lg font-sans disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-contrast hover:bg-primary/90 active:bg-primary/85',
        destructive:
          'bg-error dark:text-contrast hover:bg-error/90 active:bg-error/85 text-white',
        outline:
          'border-default text-contrast bg-accent hover:bg-accent/90 active:text-contrast/85 border',
        secondary:
          'bg-secondary text-contrast hover:bg-secondary/90 active:bg-secondary/80',
        ghost:
          'text-contrast hover:bg-secondary/90 active:bg-secondary/80 bg-transparent',
        link: 'text-contrast underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
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
