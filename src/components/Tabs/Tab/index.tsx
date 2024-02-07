import { TabProps } from "./types";

export const Tab = ({ children }: TabProps) => {
  return <li role="tabpanel">{children}</li>;
};

Tab.displayName = "Tab";
