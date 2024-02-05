import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tableFooterStyles } from "./styles";
import { TableFooterProps } from "./types";

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ children, className, ...props }, ref) => (
  <tfoot
    className={twMerge(tableFooterStyles({ className }))}
    ref={ref}
    {...props}
  >
    {children}
  </tfoot>
));

TableFooter.displayName = "TableFooter";
