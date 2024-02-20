"use client";

import { forwardRef, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { baseHeaderStyles } from "./styles";
import { BaseHeaderProps } from "./types";
import { Button } from "~/components/Layout";
import { DrawerContext } from "../context";

export const BaseHeader = forwardRef<HTMLDivElement, BaseHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext);

    return (
      <div
        className={twMerge(baseHeaderStyles({ className }))}
        ref={ref}
        {...props}
      >
        <Button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>PLI OPEN</Button>
        {children}
      </div>
    );
  }
);

BaseHeader.displayName = "BaseHeader";
