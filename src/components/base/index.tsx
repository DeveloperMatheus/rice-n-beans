import { ComponentProps } from 'react'

import { Button } from '~/components/button'
import { tv, VariantProps } from 'tailwind-variants'

const baseStyles = tv({
  slots: {
    wrapper: 'flex',
    container: 'flex h-dvh w-full flex-col overflow-hidden',
    content:
      'bg-scaffold border-default min-h-0 flex-1 overflow-auto border-t p-3 lg:border-y',
    drawer:
      'bg-scaffold border-default fixed top-0 right-0 left-0 z-10 h-dvh overflow-x-hidden overflow-y-auto border p-3 transition-all lg:sticky',
    header:
      'bg-scaffold border-default sticky top-0 w-full shrink-0 p-3 shadow-md lg:border-t',
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
  className,
  orientation = 'left',
  ...props
}: ComponentProps<'div'> & Omit<VariantProps<typeof baseStyles>, 'isOpen'>) => (
  <div className={wrapper({ className, orientation })} {...props} />
)

/* --- BaseContainer --- */
const BaseContainer = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={container({ className })} {...props} />
)

/* --- BaseContent --- */
const BaseContent = ({ className, ...props }: ComponentProps<'main'>) => (
  <main className={content({ className })} {...props} />
)

/* --- BaseDrawer --- */
const BaseDrawer = ({
  className,
  isOpen,
  ...props
}: ComponentProps<'nav'> &
  Omit<VariantProps<typeof baseStyles>, 'orientation'>) => (
  <nav className={drawer({ className, isOpen })} {...props} />
)

/* --- BaseHeader --- */
const BaseHeader = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={header({ className })} {...props} />
)

/* --- BaseToggleDrawer --- */
type BaseToggleDrawerProps = Omit<
  ComponentProps<'button'>,
  'aria-label' | 'children'
> & {
  'aria-label': string
}

const BaseToggleDrawer = ({ className, ...props }: BaseToggleDrawerProps) => (
  <Button
    {...props}
    variant="ghost"
    size="icon"
    className={toggle({ className })}
  >
    <svg
      aria-hidden="true"
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

export {
  Base,
  BaseContainer,
  BaseContent,
  BaseDrawer,
  BaseHeader,
  BaseToggleDrawer
}
