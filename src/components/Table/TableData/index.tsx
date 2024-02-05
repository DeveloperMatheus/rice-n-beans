import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tableDataStyles } from "./styles";
import { TableDataProps } from "./types";

export const TableData = forwardRef<HTMLTableCellElement, TableDataProps>(
  ({ children, className, ...props }, ref) => (
    <td
      className={twMerge(tableDataStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </td>
  )
);

TableData.displayName = "TableData";
