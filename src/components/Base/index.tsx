"use client";

import { VariantProps, cva } from "class-variance-authority";
import {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "~/components/Layout";

const baseStyles = cva("flex", {
  variants: {
    orientation: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
  },
});
const baseContainerStyles = cva(
  "bg-red-800 dark:bg-zinc-800 h-screen overflow-y-auto w-full"
);
const baseContentStyles = cva("px-3 pb-3 pt-1");
const baseDrawerStyles = cva(
  "bg-green-800 fixed lg:sticky h-screen transition-all z-10",
  {
    variants: {
      isOpen: {
        true: "w-full lg:w-72",
        false: "hidden lg:block lg:w-10",
      },
    },
  }
);
const baseHeaderStyles = cva(
  "w-full sticky top-0 bg-blue-800 border-b shadow-md p-3"
);
const baseCloseDrawerStyles = cva(
  "text-2xl focus:ring-offset-0 dark:focus:ring-offset-0 focus:ring-0 dark:focus:ring-0 hover:bg-transparent dark:hover:bg-transparent"
);

/* --- Context --- */
const initialValue = {
  isCollapsed: true,
  toggleDrawercollapse: () => {},
};

const DrawerContext = createContext(initialValue);

const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setCollapse] = useState(true);

  const [isMounted, setMounted] = useState(false);

  const toggleDrawercollapse = () => {
    setCollapse((prevState) => !prevState);
    localStorage.setItem("drawer", JSON.stringify(!isCollapsed));
  };

  function setStateFromLocalStorage() {
    const isOpen = localStorage.getItem("drawer");

    if (!isOpen) return setCollapse(false);

    setCollapse(JSON.parse(isOpen) as boolean);
  }

  useEffect(() => {
    setMounted(true);
  }, [isMounted]);

  useEffect(() => {
    setStateFromLocalStorage();
  }, [isCollapsed]);

  if (!isMounted) return;

  return (
    <DrawerContext.Provider value={{ isCollapsed, toggleDrawercollapse }}>
      {children}
    </DrawerContext.Provider>
  );
};

/* --- Base --- */
export const Base = forwardRef<
  HTMLDivElement,
  ComponentProps<"div"> & VariantProps<typeof baseStyles>
>(({ children, className, orientation = "left", ...props }, ref) => {
  return (
    <DrawerProvider>
      <div
        className={twMerge(baseStyles({ className, orientation }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </DrawerProvider>
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
>(({ children, className, ...props }, ref) => {
  const { isCollapsed } = useContext(DrawerContext);

  return (
    <div
      className={twMerge(baseDrawerStyles({ className, isOpen: isCollapsed }))}
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
  const { isCollapsed, toggleDrawercollapse } = useContext(DrawerContext);

  function handleCloseIcon() {
    if (isCollapsed) return "🡐";
    return "🡒";
  }

  return (
    <Button
      variant="ghost"
      className={twMerge(baseCloseDrawerStyles({ className }))}
      onClick={() => toggleDrawercollapse()}
      ref={ref}
      {...props}
    >
      {handleCloseIcon()}
    </Button>
  );
});

BaseToggleDrawer.displayName = "BaseToggleDrawer";
