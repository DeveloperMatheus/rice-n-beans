import { createContext } from "react";
import { ActiveTabsContext } from "./Tabs/types";

export const TabsContext = createContext<ActiveTabsContext>({
  activeTab: undefined,
  setActiveTab: () => undefined,
});
