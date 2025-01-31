'use client'

import { ComponentProps } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { Menu } from 'lucide-react'

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
  'bg-scaffold p-3 overflow-auto h-[calc(100vh-4.1875rem)] border-t lg:border-y border-default'

const baseDrawerStyles = cva(
  'bg-scaffold p-3 fixed top-0 left-0 right-0 lg:sticky h-screen transition-all z-10 border border-default overflow-x-hidden overflow-y-auto lg:overflow-y-auto lg:overflow-x-hidden',
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
  'bg-scaffold w-full sticky top-0 shadow-md p-3 lg:border-t border-default'

const baseToggleDrawerStyles = 'text-contrast text-2xl'

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
      <Menu size={26} />
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
