import { ComponentProps } from 'react'

import { Button } from '~/components/Button'
import { tv, VariantProps } from 'tailwind-variants'

const baseStyles = tv({
  slots: {
    wrapper: 'flex',
    container: 'h-screen w-full overflow-hidden',
    content:
      'bg-scaffold border-default h-[calc(100vh-4.1875rem)] overflow-auto border-t p-3 lg:border-y',
    drawer:
      'bg-scaffold border-default fixed top-0 right-0 left-0 z-10 h-screen overflow-x-hidden overflow-y-auto border p-3 transition-all lg:sticky lg:overflow-x-hidden lg:overflow-y-auto',
    header:
      'bg-scaffold border-default sticky top-0 w-full p-3 shadow-md lg:border-t',
    toggle: 'text-2xl'
  },
  variants: {
    orientation: {
      left: {
        wrapper: 'flex-row'
      },
      right: {
        wrapper: 'flex-row-reverse'
      }
    },
    isOpen: {
      true: {
        drawer: 'w-full lg:w-72 lg:p-5'
      },
      false: {
        drawer: 'hidden lg:block lg:w-14'
      }
    }
  }
})

const { wrapper, container, content, drawer, header, toggle } = baseStyles()

/* --- Base --- */
const Base = ({
  children,
  className,
  orientation = 'left',
  ...props
}: ComponentProps<'div'> & Omit<VariantProps<typeof baseStyles>, 'isOpen'>) => {
  return (
    <div className={wrapper({ className, orientation })} {...props}>
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
  <div className={container({ className })} {...props}>
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
  <main className={content({ className })} {...props}>
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
}: ComponentProps<'nav'> &
  Omit<VariantProps<typeof baseStyles>, 'orientation'>) => {
  return (
    <nav className={drawer({ className, isOpen })} {...props}>
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
    <div className={header({ className })} {...props}>
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
      className={toggle({ className })}
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
