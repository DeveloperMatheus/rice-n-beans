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
          className="block lg:hidden text-black"
        />
        <DrawerItems isDrawerOpen={isOpen} />
      </BaseDrawer>
      <BaseContainer>
        <BaseHeader className="text-black">
          <BaseToggleDrawer onClick={() => handleToggleDrawer()} />
        </BaseHeader>
        <BaseContent>{children}</BaseContent>
      </BaseContainer>
    </Base>
  );
}
