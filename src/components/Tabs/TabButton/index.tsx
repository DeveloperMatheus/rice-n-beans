import { Button } from "~/components/Layout";

export type TabButtonProps = {
  title: string;
  index: number;
  isActive: boolean;
  setSelectedTab: (index: number) => void;
};

export const TabButton = ({
  title,
  index,
  isActive,
  setSelectedTab,
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
    <li role="presentation">
      <Button
        className={`${renderActiveClass()} rounded-b-none min-w-24`}
        onClick={() => setSelectedTab(index)}
        role="tab"
        aria-selected={isActive}
        id={`tab-${title}`}
        aria-controls={`tabpanel-${title}`}
        tabIndex={applyTabIndex()}
      >
        {title}
      </Button>
    </li>
  );
};

TabButton.displayName = "TabButton";
