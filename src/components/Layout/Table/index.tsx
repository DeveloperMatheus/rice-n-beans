import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import {
  tableBodyStyles,
  tableDataStyles,
  tableFooterStyles,
  tableHeadStyles,
  tableHeaderStyles,
  tableRowStyles,
  tableStyles,
} from "./styles";
import {
  TableBodyProps,
  TableDataProps,
  TableFooterProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from "./types";

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, ...props }, ref) => (
    <table className={twMerge(tableStyles({ className }))} ref={ref} {...props}>
      {children}
    </table>
  )
);

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

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, ...props }, ref) => (
    <tbody
      className={twMerge(tableBodyStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </tbody>
  )
);

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, ...props }, ref) => (
    <tr className={twMerge(tableRowStyles({ className }))} ref={ref} {...props}>
      {children}
    </tr>
  )
);

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

Table.displayName = "Table";
TableHeader.displayName = "TableHeader";
TableBody.displayName = "TableBody";
TableRow.displayName = "TableRow";
TableData.displayName = "TableData";
TableHead.displayName = "TableHead";
TableFooter.displayName = "TableFooter";
