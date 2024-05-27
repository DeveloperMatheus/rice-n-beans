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
const baseContainerStyles = cva("h-screen w-full");
const baseDrawerStyles = cva("bg-green-800 h-screen", {
  variants: {
    isDrawerOpen: {
      true: "w-72",
      false: "w-10",
    },
  },
});
const baseHeaderStyles = cva("w-full bg-white border-b shadow-md p-3");

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

/* --- BaseDrawer --- */
export const BaseDrawer = forwardRef<
  HTMLDivElement,
  ComponentProps<"div"> & VariantProps<typeof baseDrawerStyles>
>(({ children, className, ...props }, ref) => {
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
});

BaseDrawer.displayName = "BaseDrawer";

/* --- BaseHeader --- */
export const BaseHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    const { toggleDrawercollapse } = useContext(DrawerContext);

    return (
      <div
        className={twMerge(baseHeaderStyles({ className }))}
        ref={ref}
        {...props}
      >
        <Button onClick={() => toggleDrawercollapse()}>PLI OPEN</Button>
        {children}
      </div>
    );
  }
);

BaseHeader.displayName = "BaseHeader";
