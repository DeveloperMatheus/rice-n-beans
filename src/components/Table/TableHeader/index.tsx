import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tableHeaderStyles } from "./styles";
import { TableHeaderProps } from "./types";

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ children, className, ...props }, ref) => (
  <thead
    className={twMerge(tableHeaderStyles({ className }))}
    ref={ref}
    {...props}
  >
    {children}
  </thead>
));

TableHeader.displayName = "TableHeader";
