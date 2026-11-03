import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const inputStyles = tv({
  base: 'focus-ring disabled-state h-control-md w-full appearance-none rounded-default border border-line bg-canvas px-inset-sm text-canvas-fg placeholder:text-fg-muted file:border-0 file:bg-transparent file:font-medium'
})

type InputProps = ComponentProps<'input'> & {
  isInvalid?: boolean
}

const Input = ({ className, isInvalid, ...props }: InputProps) => (
  <input
    className={inputStyles({ className })}
    aria-invalid={isInvalid || undefined}
    {...props}
  />
)

export { Input }
