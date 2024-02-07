import React, { ReactElement, useState } from "react";
import { TabButton, TabButtonProps } from "../TabButton";

type TabsProps = {
  children: ReactElement<TabButtonProps>[];
  defaultValue: number;
};

export const Tabs = ({ children, defaultValue = 0 }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  return (
    <>
      <ul className="flex flex-row items-center just" role="tablist">
        {children.map((item, index) => (
          <TabButton
            key={`tab-${item.props.title}--${index}`}
            title={item.props.title}
            index={index}
            isActive={index === selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </>
  );
};

Tabs.displayName = "Tabs";
