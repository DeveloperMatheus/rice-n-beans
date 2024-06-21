"use client";

import { useState } from "react";
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

  return (
    <Base>
      <BaseDrawer isOpen={isOpen}>
        <BaseToggleDrawer
          onClick={() => handleToggleDrawer()}
          className="block p-0 lg:p-3 lg:hidden text-black"
        />
        <DrawerItems isDrawerOpen={isOpen} />
      </BaseDrawer>
      <BaseContainer>
        <BaseHeader className="text-black">
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
