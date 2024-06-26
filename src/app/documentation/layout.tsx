"use client";

import { useCallback, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleDrawer() {
    setIsOpen(!isOpen);
  }

  const isMobile = useCallback(() => /Mobi/i.test(navigator.userAgent), []);

  return (
    <Base>
      <BaseDrawer isOpen={isOpen}>
        <div className="flex items-center justify-start lg:hidden px-3 pb-3 gap-3">
          <BaseToggleDrawer
            onClick={() => handleToggleDrawer()}
            className="block p-0 lg:p-3 lg:hidden text-black"
          />
          <ThemeSwitch />
        </div>
        <DrawerItems
          isDrawerOpen={isOpen}
          onDrawerClick={() => {
            if (!isMobile()) return;
            handleToggleDrawer();
          }}
        />
      </BaseDrawer>
      <BaseContainer>
        <BaseHeader>
          <div className="flex items-center justify-start">
            <BaseToggleDrawer onClick={() => handleToggleDrawer()} />
            <ThemeSwitch />
          </div>
        </BaseHeader>
        <BaseContent>{children}</BaseContent>
      </BaseContainer>
    </Base>
  );
}
