import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const radioStyles =
  "appearance-none cursor-pointer min-w-5 min-h-5 bg-scaffold border border-default rounded-full relative checked:before:absolute checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:top-1/2 checked:before:left-1/2 checked:before:content-[''] checked:before:w-[0.6rem] checked:before:h-[0.6rem] checked:before:rounded-full checked:before:bg-contrast disabled:cursor-not-allowed disabled:opacity-50"

/* --- Radio --- */
const Radio = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="radio" className={twMerge(radioStyles, className)} {...props} />
)

Radio.displayName = 'Radio'

export { Radio }
