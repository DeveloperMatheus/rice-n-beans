import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

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
  children: React.ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
} & VariantProps<typeof textStyles>

const Text = ({ tag = 'p', children, className }: TextProps) =>
  React.createElement(
    tag,
    { className: textStyles({ className, tag }) },
    children
  )

export { Text }
