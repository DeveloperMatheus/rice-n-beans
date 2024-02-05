import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tableHeadStyles } from "./styles";
import { TableHeadProps } from "./types";

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ children, className, ...props }, ref) => (
    <th
      className={twMerge(tableHeadStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </th>
  )
);

TableHead.displayName = "TableHead";
