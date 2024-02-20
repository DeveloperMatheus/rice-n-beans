"use client";

import { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { baseStyles } from "./styles";
import { BaseProps } from "./types";
import { DrawerContext } from "../context";

export const Base = forwardRef<HTMLDivElement, BaseProps>(
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
          className={twMerge(baseStyles({ className }))}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </DrawerContext.Provider>
    );
  }
);

Base.displayName = "Base";
