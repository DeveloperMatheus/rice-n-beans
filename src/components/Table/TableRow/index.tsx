import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tableRowStyles } from "./styles";
import { TableRowProps } from "./types";

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, ...props }, ref) => (
    <tr className={twMerge(tableRowStyles({ className }))} ref={ref} {...props}>
      {children}
    </tr>
  )
);

TableRow.displayName = "TableRow";
