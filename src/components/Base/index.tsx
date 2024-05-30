import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { PanelLeft } from "lucide-react";

import { Button } from "~/components/Layout";

const baseStyles = cva("flex", {
  variants: {
    orientation: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
  },
});
const baseContainerStyles = cva("h-screen w-full");
const baseContentStyles = cva(
  "bg-white dark:bg-zinc-900 px-3 py-2 overflow-y-auto h-screen h-[calc(100vh-4.5625rem)] border-t lg:border-y border-zinc-200 dark:border-zinc-800"
);
const baseDrawerStyles = cva(
  "bg-white dark:bg-zinc-900 fixed lg:sticky h-screen transition-all z-10 border border-zinc-200 dark:border-zinc-800",
  {
    variants: {
      isOpen: {
        true: "w-full lg:w-72",
        false: "hidden lg:block lg:w-14",
      },
    },
  }
);
const baseHeaderStyles = cva(
  "bg-white dark:bg-zinc-900 w-full sticky top-0 shadow-md p-3 lg:border-t border-zinc-200 dark:border-zinc-800"
);
const baseCloseDrawerStyles = cva(
  "text-black dark:text-white text-2xl focus:ring-offset-0 dark:focus:ring-offset-0 focus:ring-0 dark:focus:ring-0 hover:bg-transparent dark:hover:bg-transparent"
);

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
  HTMLDivElement,
  ComponentProps<"div"> & VariantProps<typeof baseDrawerStyles>
>(({ children, isOpen = true, className, ...props }, ref) => {
  return (
    <div
      className={twMerge(baseDrawerStyles({ className, isOpen }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
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
      <PanelLeft size={32} />
    </Button>
  );
});

BaseToggleDrawer.displayName = "BaseToggleDrawer";
