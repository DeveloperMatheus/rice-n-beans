"use client";

import { forwardRef, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { baseDrawerStyles } from "./styles";
import { BaseDrawerProps } from "./types";
import { DrawerContext } from "../context";

export const BaseDrawer = forwardRef<HTMLDivElement, BaseDrawerProps>(
  ({ children, className, ...props }, ref) => {
    const { isCollapsed } = useContext(DrawerContext);

    return (
      <div
        className={twMerge(
          baseDrawerStyles({ className, isDrawerOpen: isCollapsed })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BaseDrawer.displayName = "BaseDrawer";
