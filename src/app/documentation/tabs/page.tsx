import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";

const TABS_CODE_STYLES = `"use client";

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
const tabPanelStyles = "mt-3 w-full rounded-b-lg";
const tabButtonStyles =
  "focus:ring-0 focus:ring-transparent dark:focus:ring-transparent";
`;

const TABS_CODE_COMPONENT = `
type TabsProviderProps = {
  children: React.ReactNode;
  defaultValue: string;
};
type TabsContextProps = {
  activeTab: string;
  setActiveTab: (selectedTab: string) => void;
};

const TabsContext = createContext<TabsContextProps>({
  activeTab: "",
  setActiveTab: () => null,
});

const TabsProvider = ({ children, defaultValue }: TabsProviderProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

type TabsProps = {
  children: React.ReactNode;
  defaultValue: string;
} & ComponentPropsWithoutRef<"div">;

export const Tabs = ({
  children,
  className,
  defaultValue,
  ...props
}: TabsProps) => {
  const refList = useRef<HTMLDivElement>(null);

  function arrowFocus(
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
          arrowFocus(tabs[prev], event);
          break;
        }

        case "ArrowRight": {
          const next = (index + 1 + tabs.length) % tabs.length;
          arrowFocus(tabs[next], event);
          break;
        }
      }
    },
    []
  );

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

type TabPanelProps = {
  id: string;
} & ComponentProps<"div">;

export const TabPanel = ({ children, id, className }: TabPanelProps) => {
  const tabActive = useContext(TabsContext);

  function renderActiveTabPanel() {
    if (tabActive?.activeTab !== id) return;
    return (
      <div
        className={twMerge(tabPanelStyles, className)}
        id={\`tabpanel-\${id}\`}
        aria-labelledby={\`tab-\${id}\`}
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

type TabButtonProps = {
  id: string;
} & ComponentProps<"button">;
export const Tab = forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ children, className, id, ...props }, ref) => {
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
      tabButton.focus();
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
        id={\`tab-\${id}\`}
        aria-controls={\`tabpanel-\${id}\`}
        tabIndex={applyTabIndex()}
        variant={applyActiveStyle()}
        aria-disabled="false"
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

Tab.displayName = "Tab";
`;

const CODE_TABS_VIEW = `<Tabs defaultValue="view" className="mt-3">
  <TabList>
    <Tab id="view">View</Tab>
    <Tab id="code">Code</Tab>
  </TabList>
  <TabPanel id="view">
    <div className="w-fit">
      <Text>
        The buttons &rsquo;View&rsquo; and &rsquo;Code&rsquo; are
        literally showing the Tabs
      </Text>
    </div>
  </TabPanel>
  <TabPanel id="code">
    <code className="whitespace-pre">Ok i think i'm entering in an infinite loop here</code>
  </TabPanel>
</Tabs>
`;

export default function DocumentationTabsPage() {
  return (
    <section>
      <Text tag="h1">Tabs</Text>

      <Text tag="h2">
        Tabs is a set of controlled components made through the use of useState
        and Context API in order to give you... Tabs.
      </Text>

      <Text>
        The Tabs are composed by the following components: {`<Tabs>`},{" "}
        {`<TabList>`}, {`<TabPanel>`} and {`<Tab>`}. You have to pass an id to
        synchronize which tab button will open which tab panel, otherwise it
        will not work.
      </Text>

      <DocumentationSection
        title="Tabs"
        codeStyle={TABS_CODE_STYLES}
        codeComponent={TABS_CODE_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <div className="w-fit">
              <Text>
                The buttons &rsquo;View&rsquo; and &rsquo;Code&rsquo; are
                literally showing the Tabs
              </Text>
            </div>
          </TabPanel>
          <TabPanel id="code" className="overflow-x-auto">
            <code className="whitespace-pre">{CODE_TABS_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  );
}
