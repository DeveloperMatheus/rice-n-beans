import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tabListStyles } from "./styles";
import { TabListProps } from "./types";

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, ...props }, ref) => (
    <div
      role="tablist"
      className={twMerge(tabListStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

TabList.displayName = "TabList";
