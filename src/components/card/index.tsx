import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const cardStyles = tv({
  base: 'rounded-default border border-line bg-canvas p-3 text-canvas-fg shadow-xs'
})

const Card = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={cardStyles({ className })} {...props} />
)

export { Card }
