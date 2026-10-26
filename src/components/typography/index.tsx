import React from 'react'
import { tv } from 'tailwind-variants'

const textStyles = tv({
  base: 'text-scaffold-contrast',
  variants: {
    tag: {
      h1: 'text-3xl font-bold lg:text-4xl',
      h2: 'text-2xl font-bold lg:text-3xl',
      h3: 'text-xl font-bold lg:text-2xl',
      h4: 'text-lg font-bold lg:text-xl',
      h5: 'text-base font-bold lg:text-lg',
      h6: 'text-sm font-bold lg:text-base',
      p: 'text-sm font-normal lg:text-base',
      span: 'text-sm font-normal lg:text-base'
    }
  },
  defaultVariants: {
    tag: 'p'
  }
})

type TextProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
} & React.HTMLAttributes<HTMLElement>

const Text = ({ tag = 'p', children, className, ...props }: TextProps) =>
  React.createElement(
    tag,
    { ...props, className: textStyles({ className, tag }) },
    children
  )

export { Text }
