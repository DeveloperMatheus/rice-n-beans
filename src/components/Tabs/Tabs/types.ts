import { ComponentProps } from "react";

export type TabsProps = {
  children: React.ReactNode;
  defaultValue: string;
} & ComponentProps<"div">;

export type ActiveTabsContext = {
  activeTab: string | undefined;
  setActiveTab: (id: string) => void;
};
