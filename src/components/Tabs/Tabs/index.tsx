import React, { ReactElement, useCallback, useRef, useState } from "react";
import { TabButton, TabButtonProps } from "../TabButton";

type TabsProps = {
  children: ReactElement<TabButtonProps>[];
  defaultValue: number;
};

export const Tabs = ({ children, defaultValue = 0 }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);
  const refList = useRef<HTMLDivElement>(null);

  function clickAndFocus(tabButton: HTMLElement) {
    tabButton.focus();
    tabButton.click();
  }

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const list = refList.current;

      if (!list) return;

      const tabs = Array.from<HTMLElement>(
        list.querySelectorAll('[role="tab"]:not([disabled])')
      );

      const index = tabs.indexOf(document.activeElement as HTMLElement);

      if (index < 0) return;

      switch (event.key) {
        case "ArrowLeft": {
          const prev = (index - 1 + tabs.length) % tabs.length;
          clickAndFocus(tabs[prev]);
          break;
        }

        case "ArrowRight": {
          const next = (index + 1 + tabs.length) % tabs.length;
          clickAndFocus(tabs[next]);
          break;
        }
        case "Tab": {
          break;
        }
      }
    },
    []
  );

  return (
    <div ref={refList} onKeyDown={onKeyDown}>
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
    </div>
  );
};

Tabs.displayName = "Tabs";
