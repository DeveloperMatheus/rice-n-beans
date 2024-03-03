import { createContext, useEffect, useState } from "react";

type TabsContextProps = {
  activeTab: string;
  setActiveTab: (selectedTab: string) => void;
};

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

export { TabsContext, TabsProvider };
