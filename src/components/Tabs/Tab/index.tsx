import { Button } from "~/components/Layout";
import { TabButtonProps } from "./types";
import { twMerge } from "tailwind-merge";
import { tabButtonStyles } from "./styles";
import { useCallback, useContext } from "react";
import { TabsContext } from "../context";

export const Tab = ({
  title,
  className,
  id,
  ref,
  ...props
}: TabButtonProps) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  function isTabActive() {
    if (activeTab !== id) return false;

    return true;
  }

  function applyActiveStyle() {
    if (!isTabActive()) return "outline";

    return "default";
  }

  function applyTabIndex() {
    if (!isTabActive()) return -1;

    return 0;
  }

  function clickAndFocus(
    tabButton: HTMLElement,
    evt: React.MouseEvent<HTMLButtonElement>
  ) {
    tabButton.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    evt.preventDefault();
  }

  const onClickDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      clickAndFocus(event.currentTarget, event);
    },
    []
  );

  return (
    <Button
      className={twMerge(tabButtonStyles({ className }))}
      onClick={(evt) => {
        setActiveTab(id);
        onClickDown(evt);
      }}
      role="tab"
      aria-selected={isTabActive()}
      id={`tab-${id}`}
      aria-controls={`tabpanel-${id}`}
      tabIndex={applyTabIndex()}
      variant={applyActiveStyle()}
      aria-disabled="false"
      {...props}
    >
      {title}
    </Button>
  );
};

Tab.displayName = "Tab";
