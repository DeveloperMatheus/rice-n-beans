"use client";

import { useState } from "react";
import {
  Base,
  BaseContainer,
  BaseContent,
  BaseDrawer,
  BaseHeader,
  BaseToggleDrawer,
} from "~/components/Base";

import { Text } from "~/components/Typography";

export const DocumentationBaseExample = () => {
  const [isOpen, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!isOpen);
  }

  return (
    <Base>
      <BaseDrawer isOpen={isOpen}>
        <BaseToggleDrawer
          aria-label="Toggle drawer"
          className="lg:hidden"
          onClick={() => toggleDrawer()}
        />
      </BaseDrawer>
      <BaseContainer>
        <BaseHeader>
          <BaseToggleDrawer
            aria-label="Toggle drawer"
            onClick={() => toggleDrawer()}
          />
        </BaseHeader>
        <BaseContent>
          <Text>Your content here</Text>
        </BaseContent>
      </BaseContainer>
    </Base>
  );
};
