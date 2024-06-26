import {
  BookText,
  BookType,
  InspectionPanel,
  LayoutPanelLeft,
  TableProperties,
  TableRowsSplit,
} from "lucide-react";
import Link from "next/link";
import { Text } from "~/components/Typography";

const MOCK_COMPONENTS: { icon: React.ReactNode; title: string; url: string }[] =
  [
    {
      icon: <BookText size={26} />,
      title: "Forms",
      url: "/documentation/forms",
    },
    {
      icon: <LayoutPanelLeft size={26} />,
      title: "Layout",
      url: "/documentation/layout",
    },
    {
      icon: <InspectionPanel size={26} />,
      title: "Modal",
      url: "/documentation/modal",
    },
    {
      icon: <TableProperties size={26} />,
      title: "Table",
      url: "/documentation/table",
    },
    {
      icon: <TableRowsSplit size={26} />,
      title: "Tabs",
      url: "/documentation/tabs",
    },
    {
      icon: <BookType size={26} />,
      title: "Typography",
      url: "/documentation/typography",
    },
  ];

export const DrawerItems = ({
  isDrawerOpen = true,
  onDrawerClick,
}: {
  isDrawerOpen: boolean;
  onDrawerClick: () => void;
}) => {
  function renderOpenContent(element: React.ReactNode): React.ReactNode {
    if (!isDrawerOpen) return;
    return element;
  }

  function renderMockComponents() {
    return (
      <div className="space-y-3 flex flex-col items-start justify-center">
        {MOCK_COMPONENTS.map((sidenavItem, index) => (
          <Link
            key={`${sidenavItem.title}--${index}`}
            className="flex items-center space-x-2"
            href={sidenavItem.url}
            onClick={() => onDrawerClick()}
          >
            {sidenavItem.icon}
            {renderOpenContent(<Text>{sidenavItem.title}</Text>)}
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div>
      {renderOpenContent(
        <Text tag="h2" className="mb-5">
          Components
        </Text>
      )}
      {renderMockComponents()}
    </div>
  );
};
