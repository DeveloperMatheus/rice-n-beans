import { Button } from "~/components/Layout";
import { TabButtonProps } from "./types";
import { twMerge } from "tailwind-merge";
import { tabButtonStyles } from "./styles";
import { useContext } from "react";
import { TabsContext } from "../context";

export const Tab = ({ title, className, id }: TabButtonProps) => {
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

  return (
    <Button
      className={twMerge(tabButtonStyles({ className }))}
      onClick={() => setActiveTab(id)}
      role="tab"
      aria-selected={isTabActive()}
      id={`tab-${id}`}
      aria-controls={`tabpanel-${id}`}
      tabIndex={applyTabIndex()}
      variant={applyActiveStyle()}
      aria-disabled="false"
    >
      {title}
    </Button>
  );
};

Tab.displayName = "Tab";
