"use client";

import { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { baseStyles } from "./styles";
import { BaseProps } from "./types";
import { DrawerContext, DrawerProvider } from "../context";

export const Base = forwardRef<HTMLDivElement, BaseProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <DrawerProvider>
        <div
          className={twMerge(baseStyles({ className }))}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </DrawerProvider>
    );
  }
);

Base.displayName = "Base";
