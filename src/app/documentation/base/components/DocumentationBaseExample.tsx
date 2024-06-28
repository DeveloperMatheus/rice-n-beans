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
        <div className="lg:hidden">
          <BaseToggleDrawer onClick={() => toggleDrawer()} />
          <div>Your drawer menu</div>
        </div>
      </BaseDrawer>
      <BaseContainer>
        <BaseHeader>
          <BaseToggleDrawer onClick={() => toggleDrawer()} />
        </BaseHeader>
        <BaseContent>
          <Text>Your content here</Text>
        </BaseContent>
      </BaseContainer>
    </Base>
  );
};
