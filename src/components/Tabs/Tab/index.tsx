import { twMerge } from "tailwind-merge";
import { TabProps } from "./types";
import { tabPanelStyles } from "./styles";

export const Tab = ({ children, title, className }: TabProps) => {
  return (
    <div
      className={twMerge(tabPanelStyles({ className }))}
      id={`tabpanel-${title}`}
      aria-labelledby={`tab-${title}`}
      role="tabpanel"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

Tab.displayName = "Tab";
