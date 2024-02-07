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
    return "bg-yellow-600";
  }

  function applyTabIndex() {
    if (!isActive) return -1;
    return 0;
  }

  return (
    <li role="presentation">
      <Button
        className={`${renderActiveClass()} rounded-none`}
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
