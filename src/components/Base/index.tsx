'use client'

import { ComponentProps } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import { Button } from '~/components/Button'

const baseStyles = cva('flex', {
  variants: {
    orientation: {
      left: 'flex-row',
      right: 'flex-row-reverse'
    }
  }
})
const baseContainerStyles = 'h-screen w-full overflow-hidden'
const baseContentStyles =
  'bg-scaffold border-default h-[calc(100vh-4.1875rem)] overflow-auto border-t p-3 lg:border-y'

const baseDrawerStyles = cva(
  'bg-scaffold border-default fixed top-0 right-0 left-0 z-10 h-screen overflow-x-hidden overflow-y-auto border p-3 transition-all lg:sticky lg:overflow-x-hidden lg:overflow-y-auto',
  {
    variants: {
      isOpen: {
        true: 'w-full lg:w-72 lg:p-5',
        false: 'hidden lg:block lg:w-14'
      }
    }
  }
)
const baseHeaderStyles =
  'bg-scaffold border-default sticky top-0 w-full p-3 shadow-md lg:border-t'

const baseToggleDrawerStyles = 'text-2xl'

/* --- Base --- */
const Base = ({
  children,
  className,
  orientation = 'left',
  ...props
}: ComponentProps<'div'> & VariantProps<typeof baseStyles>) => {
  return (
    <div className={twMerge(baseStyles({ className, orientation }))} {...props}>
      {children}
    </div>
  )
}

Base.displayName = 'Base'

/* --- BaseContainer --- */
const BaseContainer = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div className={twMerge(baseContainerStyles, className)} {...props}>
    {children}
  </div>
)

BaseContainer.displayName = 'BaseContainer'

/* --- BaseContent --- */
const BaseContent = ({
  children,
  className,
  ...props
}: ComponentProps<'main'>) => (
  <main className={twMerge(baseContentStyles, className)} {...props}>
    {children}
  </main>
)

BaseContent.displayName = 'BaseContent'

/* --- BaseDrawer --- */
const BaseDrawer = ({
  children,
  className,
  isOpen,
  ...props
}: ComponentProps<'nav'> & VariantProps<typeof baseDrawerStyles>) => {
  return (
    <nav
      className={twMerge(baseDrawerStyles({ className, isOpen }))}
      {...props}
    >
      {children}
    </nav>
  )
}

BaseDrawer.displayName = 'BaseDrawer'

/* --- BaseHeader --- */
const BaseHeader = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div className={twMerge(baseHeaderStyles, className)} {...props}>
      {children}
    </div>
  )
}

BaseHeader.displayName = 'BaseHeader'

/* --- BaseToggleDrawer --- */
const BaseToggleDrawer = ({
  className,
  ...props
}: ComponentProps<'button'>) => {
  return (
    <Button
      variant="ghost"
      className={twMerge(baseToggleDrawerStyles, className)}
      size="icon"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </Button>
  )
}

BaseToggleDrawer.displayName = 'BaseToggleDrawer'

export {
  Base,
  BaseContainer,
  BaseContent,
  BaseDrawer,
  BaseHeader,
  BaseToggleDrawer
}
