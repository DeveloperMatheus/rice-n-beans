import { TabProps } from "./types";

export const Tab = ({ children, title }: TabProps) => {
  return (
    <li
      id={`tabpanel-${title}`}
      aria-labelledby={`tab-${title}`}
      role="tabpanel"
    >
      {children}
    </li>
  );
};

Tab.displayName = "Tab";
