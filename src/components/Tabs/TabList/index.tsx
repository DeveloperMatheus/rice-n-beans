import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tabListStyles } from "./styles";
import { TabListProps } from "./types";

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, position, ...props }, ref) => (
    <div
      className={twMerge(tabListStyles({ className, position }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

TabList.displayName = "TabList";
