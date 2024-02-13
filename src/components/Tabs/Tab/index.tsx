import { Button } from "~/components/Layout";
import { TabButtonProps } from "./types";
import { twMerge } from "tailwind-merge";
import { tabButtonStyles } from "./styles";
import { useContext } from "react";
import { TabsContext } from "../tabsContext";

export const Tab = ({ title, className, id }: TabButtonProps) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  function isTabActive() {
    if (activeTab !== id) return false;

    return true;
  }

  function renderActiveClass() {
    if (!isTabActive()) return "border-b";

    // return "hover:bg-zinc-900/80 bg-zinc-900/80 dark:bg-zinc-50/90 underline font-bold";
    return "border-b-0 border-x border-t underline";
  }

  function applyTabIndex() {
    if (!isTabActive()) return -1;

    return 0;
  }

  return (
    <div role="presentation">
      <Button
        className={twMerge(tabButtonStyles({ className }), renderActiveClass())}
        onClick={() => setActiveTab(id)}
        role="tab"
        aria-selected={isTabActive()}
        id={`tab-${title}`}
        aria-controls={`tabpanel-${title}`}
        tabIndex={applyTabIndex()}
        variant="link"
      >
        {title}
      </Button>
    </div>
  );
};

Tab.displayName = "Tab";
