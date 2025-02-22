export const RANGE_CODE = `import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const rangeStyles =
  'border-default bg-scaffold [&::-webkit-slider-thumb]:bg-scaffold-contrast [&::-webkit-slider-thumb]:focus:ring-default dark:[&::-webkit-slider-thumb]:focus:ring-offset-scaffold [&::-moz-range-thumb]:bg-scaffold-contrast [&::-moz-range-thumb]:focus:ring-default dark:[&::-moz-range-thumb]:focus:ring-offset-scaffold h-2 cursor-pointer appearance-none rounded-full border focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:focus:ring-2 [&::-moz-range-thumb]:focus:ring-offset-2 [&::-moz-range-thumb]:focus:outline-hidden [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:focus:ring-2 [&::-webkit-slider-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:focus:outline-hidden'

const Range = ({ className, ...props }: ComponentProps<'input'>) => (
  <input type="range" className={twMerge(rangeStyles, className)} {...props} />
)

Range.displayName = 'Range'

export { Range }
`
