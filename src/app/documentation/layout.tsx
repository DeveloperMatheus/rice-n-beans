import {
  Base,
  BaseToggleDrawer,
  BaseContainer,
  BaseDrawer,
  BaseHeader,
  BaseContent,
} from "~/components/Base";
import { DrawerItems } from "./components/DrawerItems";
import { ThemeSwitch } from "~/components/Theme/ThemeSwitch";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Base>
      <BaseDrawer>
        <div className="flex items-center justify-start lg:hidden px-3 pb-3 gap-3">
          <BaseToggleDrawer className="block p-0 lg:p-3 lg:hidden" />
          <ThemeSwitch />
        </div>
        <DrawerItems />
      </BaseDrawer>
      <BaseContainer>
        <BaseHeader>
          <div className="flex items-center justify-start">
            <BaseToggleDrawer />
            <ThemeSwitch />
          </div>
        </BaseHeader>
        <BaseContent>{children}</BaseContent>
      </BaseContainer>
    </Base>
  );
}
