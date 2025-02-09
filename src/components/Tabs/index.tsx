'use client'

import {
  ComponentProps,
  ComponentPropsWithoutRef,
  createContext,
  useContext,
  useRef,
  useState
} from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '~/components/Button'

const tabsStyles = 'bg-accent border border-default rounded-lg p-3'
const tabListStyles =
  'flex flex-row items-center justify-start list-none overflow-x-auto space-x-3'
const tabPanelStyles = 'mt-3 w-full rounded-b-lg'

/* --- Context --- */
type TabsProviderProps = {
  children: React.ReactNode
  defaultValue: string
}

type TabsContextProps = {
  activeTab: string
  setActiveTab: (selectedTab: string) => void
}

const TabsContext = createContext<TabsContextProps>({
  activeTab: '',
  setActiveTab: () => null
})

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

  function arrowFocus(
    tabButton: HTMLElement,
    evt: React.KeyboardEvent<HTMLDivElement>
  ) {
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
        className={twMerge(tabsStyles, className)}
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
    className={twMerge(tabListStyles, className)}
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
  const { activeTab } = useContext(TabsContext)

  if (activeTab !== id) return

  return (
    <div
      className={twMerge(tabPanelStyles, className)}
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
  const { activeTab, setActiveTab } = useContext(TabsContext)

  function isTabActive() {
    if (activeTab !== id) return false

    return true
  }

  function applyActiveStyle() {
    if (!isTabActive()) return 'outline'

    return 'default'
  }

  function applyTabIndex() {
    if (!isTabActive()) return -1

    return 0
  }

  function clickAndFocus(
    tabButton: HTMLElement,
    evt: React.MouseEvent<HTMLButtonElement>
  ) {
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
