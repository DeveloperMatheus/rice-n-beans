export const TYPOGRAPHY_CODE = `import React from 'react'

import { twMerge } from 'tailwind-merge'
import { VariantProps, cva } from 'class-variance-authority'

const textStyles = cva('font-sans', {
  variants: {
    tag: {
      h1: 'text-3xl lg:text-4xl font-bold',
      h2: 'text-2xl lg:text-3xl font-bold',
      h3: 'text-xl lg:text-2xl font-bold',
      h4: 'text-lg lg:text-xl font-bold',
      h5: 'text-base lg:text-lg font-bold',
      h6: 'text-sm lg:text-base font-bold',
      p: 'text-sm lg:text-base font-normal',
      span: 'text-sm lg:text-base font-normal'
    },
    variant: {
      normal: 'text-contrast',
      muted: 'text-muted'
    }
  },
  defaultVariants: {
    tag: 'p',
    variant: 'normal'
  }
})

type TextProps = {
  children: React.ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
} & VariantProps<typeof textStyles>

const Text = ({
  tag = 'p',
  variant = 'normal',
  children,
  className
}: TextProps) =>
  React.createElement(
    tag,
    { className: twMerge(textStyles({ className, tag, variant })) },
    children
  )

export { Text }
`
