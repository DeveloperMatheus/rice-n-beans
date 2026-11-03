import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const inputStyles = tv({
  base: 'text-scaffold-contrast border-default bg-scaffold placeholder:placeholder-muted focus-visible:ring-default w-full appearance-none rounded-default border px-3 py-2 file:border-0 file:bg-transparent file:font-medium focus-visible:ring-2 focus-visible:outline-hidden focus-visible:outline-offset-0 aria-invalid:focus-visible:ring-error disabled:cursor-not-allowed disabled:opacity-50'
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
