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

  return (
    <li role="presentation">
      <Button
        className={renderActiveClass()}
        onClick={() => setSelectedTab(index)}
        role="tab"
      >
        {title}
      </Button>
    </li>
  );
};

TabButton.displayName = "TabButton";
