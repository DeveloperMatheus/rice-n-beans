import React, { useCallback, useRef, useState } from "react";

import { TabsContext } from "../tabsContext";
import { TabsProps } from "./types";
import { twMerge } from "tailwind-merge";
import { tabsStyles } from "./styles";

export const Tabs = ({
  children,
  className,
  defaultValue,
  ...props
}: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);
  const refList = useRef<HTMLDivElement>(null);

  function clickAndFocus(tabButton: HTMLElement) {
    tabButton.click();
    tabButton.focus();
    tabButton.scrollIntoView({ behavior: "smooth", inline: "center" });
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

      event.preventDefault();
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
      }
    },
    []
  );

  return (
    <TabsContext.Provider
      value={{
        activeTab: selectedTab,
        setActiveTab: setSelectedTab,
      }}
    >
      <div
        ref={refList}
        onKeyDown={onKeyDown}
        role="tablist"
        aria-orientation="horizontal"
        className={twMerge(tabsStyles({ className }))}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.displayName = "Tabs";
