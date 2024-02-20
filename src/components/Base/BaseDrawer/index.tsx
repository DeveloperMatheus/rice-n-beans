"use client";

import { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { baseDrawerStyles } from "./styles";
import { BaseDrawerProps } from "./types";
import { DrawerContext } from "./context";

export const BaseDrawer = forwardRef<HTMLDivElement, BaseDrawerProps>(
  ({ children, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <DrawerContext.Provider
        value={{
          isDrawerOpen: isOpen,
          setIsDrawerOpen: setIsOpen,
        }}
      >
        <div
          className={twMerge(baseDrawerStyles({ className }))}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </DrawerContext.Provider>
    );
  }
);

BaseDrawer.displayName = "BaseDrawer";
