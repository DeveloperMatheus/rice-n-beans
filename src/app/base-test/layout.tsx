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

export default function BaseTestLayout({
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
