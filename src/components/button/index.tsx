import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
  base: 'focus-ring disabled-state inline-flex cursor-pointer appearance-none items-center justify-center rounded-default',
  variants: {
    variant: {
      default:
        'bg-primary text-primary-fg hover:bg-primary-hover active:bg-primary-active',
      success:
        'bg-success text-success-fg hover:bg-success-hover active:bg-success-active',
      destructive:
        'bg-error text-error-fg hover:bg-error-hover active:bg-error-active',
      secondary:
        'bg-secondary text-secondary-fg hover:bg-secondary-hover active:bg-secondary-active',
      outline:
        'border border-line bg-canvas text-canvas-fg hover:bg-secondary active:bg-secondary-active',
      ghost:
        'bg-transparent text-canvas-fg hover:bg-secondary active:bg-secondary-active',
      link: 'text-canvas-fg underline-offset-4 hover:underline'
    },
    size: {
      default: 'h-control-md px-inset-md',
      sm: 'h-control-sm px-inset-sm text-xs',
      lg: 'h-control-lg px-inset-lg',
      icon: 'size-control-md'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

const Button = ({
  className,
  variant,
  size,
  ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonStyles>) => (
  <button className={buttonStyles({ className, variant, size })} {...props} />
)

export { Button }
