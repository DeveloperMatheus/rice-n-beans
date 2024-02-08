import { Button } from "~/components/Layout";
import { TabButtonProps } from "./types";
import { twMerge } from "tailwind-merge";
import { tabButtonStyles } from "./styles";

export const TabButton = ({
  title,
  index,
  isActive,
  setSelectedTab,
  className,
}: TabButtonProps) => {
  function renderActiveClass() {
    if (!isActive) return;
    return "hover:bg-zinc-900/80 bg-zinc-900/80 dark:bg-zinc-50/90 underline font-bold";
  }

  function applyTabIndex() {
    if (!isActive) return -1;
    return 0;
  }

  return (
    <div role="presentation">
      <Button
        className={twMerge(tabButtonStyles({ className }), renderActiveClass())}
        onClick={() => setSelectedTab(index)}
        role="tab"
        aria-selected={isActive}
        id={`tab-${title}`}
        aria-controls={`tabpanel-${title}`}
        tabIndex={applyTabIndex()}
      >
        {title}
      </Button>
    </div>
  );
};

TabButton.displayName = "TabButton";
