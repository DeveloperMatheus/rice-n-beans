"use client";

import { ComponentProps, forwardRef } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Menu } from "lucide-react";

import { Button } from "~/components/Layout";

const baseStyles = cva("flex", {
  variants: {
    orientation: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
  },
});
const baseContainerStyles = cva("h-screen w-full overflow-hidden");
const baseContentStyles = cva(
  "bg-white dark:bg-zinc-900 px-3 py-2 h-screen overflow-auto h-[calc(100vh-4.5625rem)] border-t lg:border-y border-zinc-200 dark:border-zinc-800"
);
const baseDrawerStyles = cva(
  "p-3 bg-white dark:bg-zinc-900 fixed top-0 left-0 right-0 lg:sticky h-screen transition-all z-10 border border-zinc-200 dark:border-zinc-800 overflow-x-hidden overflow-y-auto lg:overflow-y-auto lg:overflow-x-hidden",
  {
    variants: {
      isOpen: {
        true: "w-full lg:w-72 lg:p-5",
        false: "hidden lg:block lg:w-14",
      },
    },
  }
);
const baseHeaderStyles = cva(
  "bg-white dark:bg-zinc-900 w-full sticky top-0 shadow-md p-3 lg:border-t border-zinc-200 dark:border-zinc-800"
);
const baseCloseDrawerStyles = cva("text-black dark:text-white text-2xl");

/* --- Base --- */
export const Base = forwardRef<
  HTMLDivElement,
  ComponentProps<"div"> & VariantProps<typeof baseStyles>
>(({ children, className, orientation = "left", ...props }, ref) => {
  return (
    <div
      className={twMerge(baseStyles({ className, orientation }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Base.displayName = "Base";

/* --- BaseContainer --- */
export const BaseContainer = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(baseContainerStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

BaseContainer.displayName = "BaseContainer";

/* --- BaseContent --- */
export const BaseContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(baseContentStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

BaseContent.displayName = "BaseContent";

/* --- BaseDrawer --- */
export const BaseDrawer = forwardRef<
  HTMLElement,
  ComponentProps<"nav"> & VariantProps<typeof baseDrawerStyles>
>(({ children, className, isOpen, ...props }, ref) => {
  return (
    <nav
      className={twMerge(baseDrawerStyles({ className, isOpen }))}
      ref={ref}
      {...props}
    >
      {children}
    </nav>
  );
});

BaseDrawer.displayName = "BaseDrawer";

/* --- BaseHeader --- */
export const BaseHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={twMerge(baseHeaderStyles({ className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BaseHeader.displayName = "BaseHeader";

/* --- BaseCloseDrawer --- */
export const BaseToggleDrawer = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ className, ...props }, ref) => {
  return (
    <Button
      variant="ghost"
      className={twMerge(baseCloseDrawerStyles({ className }))}
      ref={ref}
      {...props}
    >
      <Menu size={32} />
    </Button>
  );
});

BaseToggleDrawer.displayName = "BaseToggleDrawer";
