import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const cardStyles = 'bg-accent border border-default rounded-lg p-3 shadow-xs'

const Card = ({ children, className, ...props }: ComponentProps<'div'>) => (
  <div className={twMerge(cardStyles, className)} {...props}>
    {children}
  </div>
)

Card.displayName = 'Card'

export { Card }
