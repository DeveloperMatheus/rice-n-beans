import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const cardStyles = tv({
  base: 'bg-scaffold border-default rounded-lg border p-3 shadow-xs'
})

const Card = ({ children, className, ...props }: ComponentProps<'div'>) => (
  <div className={cardStyles({ className })} {...props}>
    {children}
  </div>
)

Card.displayName = 'Card'

export { Card }
