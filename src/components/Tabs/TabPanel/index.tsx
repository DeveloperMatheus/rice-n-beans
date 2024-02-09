import { twMerge } from "tailwind-merge";
import { TabPanelProps } from "./types";
import { tabPanelStyles } from "./styles";
import { useContext } from "react";
import { TabsContext } from "../tabsContext";

export const TabPanel = ({ children, id, className }: TabPanelProps) => {
  const tabActive = useContext(TabsContext);

  function renderActiveTabPanel() {
    if (tabActive?.activeTab !== id) return;

    return (
      <div
        className={twMerge(tabPanelStyles({ className }))}
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
