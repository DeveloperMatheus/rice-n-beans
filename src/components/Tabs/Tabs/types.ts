export type TabsProps = {
  children: React.ReactNode;
  defaultValue: string;
};

export type ActiveTabsContext = {
  activeTab: string | undefined;
  setActiveTab: (id: string) => void;
};
