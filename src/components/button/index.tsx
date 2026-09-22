import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
  base: 'inline-flex cursor-pointer appearance-none items-center justify-center rounded-lg disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      default:
        'bg-primary text-primary-contrast hover:bg-primary/90 active:bg-primary/85',
      success:
        'bg-success text-success-contrast hover:bg-success/90 active:bg-success/85',
      destructive:
        'bg-error text-error-contrast hover:bg-error/90 active:bg-error/85',
      outline:
        'bg-scaffold border-default text-scaffold-contrast hover:bg-scaffold/90 active:text-scaffold-contrast/85 border',
      secondary:
        'bg-secondary text-secondary-contrast hover:bg-secondary/90 active:bg-secondary/80',
      ghost:
        'text-scaffold-contrast hover:bg-secondary/90 active:bg-secondary/80 bg-transparent',
      link: 'text-scaffold-contrast underline-offset-4 hover:underline'
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
})

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonStyles>) => (
  <button className={buttonStyles({ className, variant, size })} {...props}>
    {children}
  </button>
)

Button.displayName = 'Button'

export { Button }
