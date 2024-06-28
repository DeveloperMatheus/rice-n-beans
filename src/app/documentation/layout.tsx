"use client";

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
import { useCallback, useEffect, useState } from "react";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const isMobile = useCallback(() => /Mobi/i.test(navigator.userAgent), []);

  function toggleDrawer() {
    setOpen(!isOpen);
  }

  function handleToggleDrawer() {
    if (!isMobile()) return;
    setOpen(false);
  }

  useEffect(() => {
    setIsClient(true);

    if (isMobile()) return;
    setOpen(true);
  }, [isMobile]);

  if (!isClient) return;

  return (
    <Base>
      <BaseDrawer isOpen={isOpen}>
        <div className="lg:hidden">
          <BaseToggleDrawer onClick={() => toggleDrawer()} />
          <ThemeSwitch />
        </div>
        <DrawerItems
          isOpen={isOpen}
          onClickDrawerItem={() => handleToggleDrawer()}
        />
      </BaseDrawer>
      <BaseContainer>
        <BaseHeader>
          <BaseToggleDrawer onClick={() => toggleDrawer()} />
          <ThemeSwitch />
        </BaseHeader>
        <BaseContent>{children}</BaseContent>
      </BaseContainer>
    </Base>
  );
}
