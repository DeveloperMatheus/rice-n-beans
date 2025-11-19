'use client'

import {
  ComponentProps,
  ComponentPropsWithoutRef,
  createContext,
  useContext,
  useRef,
  useState
} from 'react'
import { tv } from 'tailwind-variants'
import { Button } from '~/components/Button'

const tabsStyles = tv({
  slots: {
    wrapper: 'bg-scaffold border-default rounded-lg border p-3',
    list: 'flex list-none flex-row items-center justify-start space-x-3 overflow-x-auto',
    panel: 'mt-3 w-full rounded-b-lg'
  }
})

const { wrapper, list, panel } = tabsStyles()

/* --- Context --- */
type TabsProviderProps = {
  children: React.ReactNode
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
    throw new Error('useTabsContext must be used inside an TabsProvider')
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
  children: React.ReactNode
  defaultValue: string
} & ComponentPropsWithoutRef<'div'>

const Tabs = ({ children, className, defaultValue, ...props }: TabsProps) => {
  const refList = useRef<HTMLDivElement>(null)

  const arrowFocus = (
    tabButton: HTMLElement,
    evt: React.KeyboardEvent<HTMLDivElement>
  ) => {
    tabButton.click()
    tabButton.focus()
    tabButton.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
    evt.preventDefault()
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const list = refList.current

    if (!list) return

    const tabs = Array.from<HTMLElement>(
      list.querySelectorAll('[role="tab"]:not([disabled])')
    )

    const index = tabs.indexOf(document.activeElement as HTMLElement)

    if (index < 0) return

    switch (event.key) {
      case 'ArrowLeft': {
        const prev = (index - 1 + tabs.length) % tabs.length
        arrowFocus(tabs[prev], event)
        break
      }

      case 'ArrowRight': {
        const next = (index + 1 + tabs.length) % tabs.length
        arrowFocus(tabs[next], event)
        break
      }
    }
  }

  return (
    <TabsProvider defaultValue={defaultValue}>
      <div
        ref={refList}
        onKeyDown={onKeyDown}
        className={wrapper({ className })}
        {...props}
      >
        {children}
      </div>
    </TabsProvider>
  )
}

Tabs.displayName = 'Tabs'

/* --- TabList --- */
const TabList = ({ children, className, ...props }: ComponentProps<'div'>) => (
  <div
    role="tablist"
    aria-orientation="horizontal"
    className={list({ className })}
    {...props}
  >
    {children}
  </div>
)

TabList.displayName = 'TabList'

/* --- TabPanel --- */
type TabPanelProps = {
  id: string
} & ComponentProps<'div'>

const TabPanel = ({ children, id, className, ...props }: TabPanelProps) => {
  const { activeTab } = useTabsContext()

  if (activeTab !== id) return

  return (
    <div
      className={panel({ className })}
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      role="tabpanel"
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  )
}

TabPanel.displayName = 'TabPanel'

/* --- Tab --- */
type TabButtonProps = {
  id: string
} & ComponentProps<'button'>

const Tab = ({ children, className, id, ...props }: TabButtonProps) => {
  const { activeTab, setActiveTab } = useTabsContext()

  const isTabActive = () => {
    if (activeTab !== id) return false

    return true
  }

  const applyActiveStyle = () => {
    if (!isTabActive()) return 'outline'

    return 'default'
  }

  const applyTabIndex = () => {
    if (!isTabActive()) return -1

    return 0
  }

  const clickAndFocus = (
    tabButton: HTMLElement,
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    tabButton.focus()
    evt.preventDefault()
  }

  const onClickDown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    clickAndFocus(event.currentTarget, event)
  }

  return (
    <Button
      onClick={evt => {
        setActiveTab(id)
        onClickDown(evt)
      }}
      role="tab"
      aria-selected={isTabActive()}
      id={`tab-${id}`}
      aria-controls={`tabpanel-${id}`}
      tabIndex={applyTabIndex()}
      variant={applyActiveStyle()}
      aria-disabled="false"
      {...props}
    >
      {children}
    </Button>
  )
}

Tab.displayName = 'Tab'

export { Tabs, TabList, TabPanel, Tab }
