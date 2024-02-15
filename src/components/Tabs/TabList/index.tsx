import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tabListStyles } from "./styles";
import { TabListProps } from "./types";

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className, isFitted, position, ...props }, ref) => (
    <div
      className={twMerge(tabListStyles({ className, isFitted, position }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

TabList.displayName = "TabList";
