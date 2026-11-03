import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const selectStyles = tv({
  base: 'focus-ring disabled-state field-arrow h-control-md w-full appearance-none rounded-default border border-line bg-canvas pr-8 pl-inset-sm text-canvas-fg'
})

type SelectProps = ComponentProps<'select'> & {
  isInvalid?: boolean
}

const Select = ({ className, isInvalid, ...props }: SelectProps) => (
  <select
    className={selectStyles({ className })}
    aria-invalid={isInvalid || undefined}
    {...props}
  />
)

export { Select }
