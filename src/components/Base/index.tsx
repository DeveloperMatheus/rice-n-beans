'use client'

import { ComponentProps, forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { Menu } from 'lucide-react'

import { Button } from '~/components/Layout'

const baseStyles = cva('flex', {
  variants: {
    orientation: {
      left: 'flex-row',
      right: 'flex-row-reverse'
    }
  }
})
const baseContainerStyles = cva('h-screen w-full overflow-hidden')
const baseContentStyles = cva(
  'bg-white dark:bg-zinc-900 p-3 h-screen overflow-auto h-[calc(100vh-4.1875rem)] border-t lg:border-y border-zinc-200 dark:border-zinc-800'
)
const baseDrawerStyles = cva(
  'p-3 bg-white dark:bg-zinc-900 fixed top-0 left-0 right-0 lg:sticky h-screen transition-all z-10 border border-zinc-200 dark:border-zinc-800 overflow-x-hidden overflow-y-auto lg:overflow-y-auto lg:overflow-x-hidden',
  {
    variants: {
      isOpen: {
        true: 'w-full lg:w-72 lg:p-5',
        false: 'hidden lg:block lg:w-14'
      }
    }
  }
)
const baseHeaderStyles = cva(
  'bg-white dark:bg-zinc-900 w-full sticky top-0 shadow-md p-3 lg:border-t border-zinc-200 dark:border-zinc-800'
)
const baseCloseDrawerStyles = cva('text-black dark:text-white text-2xl')

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
  <div className={twMerge(baseContainerStyles({ className }))} {...props}>
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
  <main className={twMerge(baseContentStyles({ className }))} {...props}>
    {children}
  </main>
)

BaseContent.displayName = 'BaseContent'

/* --- BaseDrawer --- */
const BaseDrawer = forwardRef(
  ({
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
)

BaseDrawer.displayName = 'BaseDrawer'

/* --- BaseHeader --- */
const BaseHeader = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div className={twMerge(baseHeaderStyles({ className }))} {...props}>
      {children}
    </div>
  )
}

BaseHeader.displayName = 'BaseHeader'

/* --- BaseCloseDrawer --- */
const BaseToggleDrawer = ({
  className,
  ...props
}: ComponentProps<'button'>) => {
  return (
    <Button
      variant="ghost"
      className={twMerge(baseCloseDrawerStyles({ className }))}
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
