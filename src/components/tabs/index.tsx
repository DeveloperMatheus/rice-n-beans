'use client'

import {
  ComponentProps,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react'
import { tv } from 'tailwind-variants'
import { Button } from '~/components/button'

const tabsStyles = tv({
  slots: {
    wrapper: 'bg-scaffold border-default rounded-default border p-3',
    list: 'flex list-none flex-row items-center justify-start space-x-3 overflow-x-auto',
    panel: 'mt-3 w-full rounded-b-lg'
  }
})

const { wrapper, list, panel } = tabsStyles()

/* --- Context --- */
type TabsProviderProps = {
  children: ReactNode
  defaultValue: string
}

type TabsContextProps = {
  activeTab: string
  setActiveTab: (selectedTab: string) => void
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined)

const useTabsContext = () => {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('useTabsContext must be used inside a Tabs')
  }

  return context
}

const TabsProvider = ({ children, defaultValue }: TabsProviderProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext value={{ activeTab, setActiveTab }}>{children}</TabsContext>
  )
}

/* --- Tabs --- */
type TabsProps = {
  defaultValue: string
} & ComponentProps<'div'>

const Tabs = ({ className, defaultValue, onKeyDown, ...props }: TabsProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown) {
      onKeyDown(event)
    }

    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      return
    }

    const tabs = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        '[role="tab"]:not([disabled])'
      )
    )
    const index = tabs.indexOf(document.activeElement as HTMLElement)

    if (index < 0) {
      return
    }

    const step = event.key === 'ArrowRight' ? 1 : -1
    const target = tabs[(index + step + tabs.length) % tabs.length]

    event.preventDefault()
    target.click()
    target.focus()
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
  }

  return (
    <TabsProvider defaultValue={defaultValue}>
      <div
        className={wrapper({ className })}
        {...props}
        onKeyDown={handleKeyDown}
      />
    </TabsProvider>
  )
}

/* --- TabList --- */
const TabList = ({ className, ...props }: ComponentProps<'div'>) => (
  <div role="tablist" className={list({ className })} {...props} />
)

/* --- TabPanel --- */
type TabPanelProps = {
  id: string
} & ComponentProps<'div'>

const TabPanel = ({ id, className, ...props }: TabPanelProps) => {
  const { activeTab } = useTabsContext()

  if (activeTab !== id) {
    return null
  }

  return (
    <div
      className={panel({ className })}
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      role="tabpanel"
      tabIndex={0}
      {...props}
    />
  )
}

/* --- Tab --- */
type TabProps = {
  id: string
} & ComponentProps<'button'>

const Tab = ({ id, onClick, ...props }: TabProps) => {
  const { activeTab, setActiveTab } = useTabsContext()
  const isActive = activeTab === id

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event)
    }

    setActiveTab(id)
    event.currentTarget.focus()
  }

  return (
    <Button
      {...props}
      role="tab"
      id={`tab-${id}`}
      aria-selected={isActive}
      aria-controls={`tabpanel-${id}`}
      tabIndex={isActive ? 0 : -1}
      variant={isActive ? 'default' : 'outline'}
      onClick={handleClick}
    />
  )
}

export { Tabs, TabList, TabPanel, Tab }
