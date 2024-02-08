import { TabProps } from "./types";

export const Tab = ({ children, title }: TabProps) => {
  return (
    <div
      id={`tabpanel-${title}`}
      aria-labelledby={`tab-${title}`}
      role="tabpanel"
      tabIndex={0}
      className="p-3"
    >
      {children}
    </div>
  );
};

Tab.displayName = "Tab";
