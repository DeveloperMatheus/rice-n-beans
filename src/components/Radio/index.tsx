import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const radioStyles = tv({
  base: "bg-scaffold border-default checked:before:bg-scaffold-contrast relative min-h-5 min-w-5 cursor-pointer appearance-none rounded-full border checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:h-[0.6rem] checked:before:w-[0.6rem] checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:rounded-full checked:before:content-[''] disabled:cursor-not-allowed disabled:opacity-50"
})
const Radio = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="radio" className={radioStyles({ className })} {...props} />
)

Radio.displayName = 'Radio'

export { Radio }
