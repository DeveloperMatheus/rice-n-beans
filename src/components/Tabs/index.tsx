"use client";

import {
  ComponentProps,
  ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/Layout";

const tabsStyles =
  "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-lg p-3";
const tabListStyles =
  "flex flex-row items-center justify-start list-none overflow-x-auto space-x-3";
const tabPanelStyles = "p-3 w-full rounded-b-lg";
const tabButtonStyles =
  "focus:ring-0 focus:ring-transparent dark:focus:ring-transparent";

type TabsProps = {
  children: React.ReactNode;
  defaultValue: string;
} & ComponentPropsWithoutRef<"div">;

type ActiveTabsContext = {
  activeTab: string | undefined;
  setActiveTab: (id: string) => void;
};

type TabsContextProps = {
  activeTab: string;
  setActiveTab: (selectedTab: string) => void;
};

type TabPanelProps = {
  id: string;
} & ComponentProps<"div">;

type TabButtonProps = {
  title: string;
  id: string;
} & ComponentProps<"button">;

const TabsContext = createContext<TabsContextProps>({
  activeTab: "",
  setActiveTab: () => null,
});

const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const Tabs = ({
  children,
  className,
  defaultValue,
  ...props
}: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);
  const refList = useRef<HTMLDivElement>(null);

  function clickAndFocus(
    tabButton: HTMLElement,
    evt: React.KeyboardEvent<HTMLDivElement>
  ) {
    tabButton.click();
    tabButton.focus();
    tabButton.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    evt.preventDefault();
  }

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const list = refList.current;

      if (!list) return;

      const tabs = Array.from<HTMLElement>(
        list.querySelectorAll('[role="tab"]:not([disabled])')
      );

      const index = tabs.indexOf(document.activeElement as HTMLElement);

      if (index < 0) return;

      switch (event.key) {
        case "ArrowLeft": {
          const prev = (index - 1 + tabs.length) % tabs.length;
          clickAndFocus(tabs[prev], event);
          break;
        }

        case "ArrowRight": {
          const next = (index + 1 + tabs.length) % tabs.length;
          clickAndFocus(tabs[next], event);
          break;
        }
      }
    },
    []
  );

  return (
    <TabsContext.Provider
      value={{
        activeTab: selectedTab,
        setActiveTab: setSelectedTab,
      }}
    >
      <div
        ref={refList}
        onKeyDown={onKeyDown}
        className={twMerge(tabsStyles, className)}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.displayName = "Tabs";

export const TabList = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={twMerge(tabListStyles, className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

TabList.displayName = "TabList";

export const TabPanel = ({ children, id, className }: TabPanelProps) => {
  const tabActive = useContext(TabsContext);

  function renderActiveTabPanel() {
    if (tabActive?.activeTab !== id) return;

    return (
      <div
        className={twMerge(tabPanelStyles, className)}
        id={`tabpanel-${id}`}
        aria-labelledby={`tab-${id}`}
        role="tabpanel"
        tabIndex={0}
      >
        {children}
      </div>
    );
  }

  return renderActiveTabPanel();
};

TabPanel.displayName = "TabPanel";

export const Tab = ({
  title,
  className,
  id,
  ref,
  ...props
}: TabButtonProps) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  function isTabActive() {
    if (activeTab !== id) return false;

    return true;
  }

  function applyActiveStyle() {
    if (!isTabActive()) return "outline";

    return "default";
  }

  function applyTabIndex() {
    if (!isTabActive()) return -1;

    return 0;
  }

  function clickAndFocus(
    tabButton: HTMLElement,
    evt: React.MouseEvent<HTMLButtonElement>
  ) {
    tabButton.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    evt.preventDefault();
  }

  const onClickDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      clickAndFocus(event.currentTarget, event);
    },
    []
  );

  return (
    <Button
      className={twMerge(tabButtonStyles, className)}
      onClick={(evt) => {
        setActiveTab(id);
        onClickDown(evt);
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
      {title}
    </Button>
  );
};

Tab.displayName = "Tab";
