import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const tableStyles = "border-collapse text-black dark:text-zinc-200";
const tableDataStyles = "px-2 py-1 text-center";
const tableRowStyles =
  "[&:not(:last-child)]:border-b border-zinc-200 dark:border-zinc-800";
const tableHeadStyles = "px-2 py-1 text-center";
const tableHeaderStyles =
  "border-b border-zinc-200 dark:border-zinc-800 text-center";
const tableFooterStyles =
  "border-t border-zinc-200 dark:border-zinc-800 font-bold";

/* --- Table --- */
export const Table = forwardRef<HTMLTableElement, ComponentProps<"table">>(
  ({ children, className, ...props }, ref) => (
    <table className={twMerge(tableStyles, className)} ref={ref} {...props}>
      {children}
    </table>
  )
);

Table.displayName = "Table";

/* --- TableBody --- */
export const TableBody = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"tbody">
>(({ children, className, ...props }, ref) => (
  <tbody className={twMerge(className)} ref={ref} {...props}>
    {children}
  </tbody>
));

TableBody.displayName = "TableBody";

/* --- TableData --- */
export const TableData = forwardRef<HTMLTableCellElement, ComponentProps<"td">>(
  ({ children, className, ...props }, ref) => (
    <td className={twMerge(tableDataStyles, className)} ref={ref} {...props}>
      {children}
    </td>
  )
);

TableData.displayName = "TableData";

/* --- TableRow --- */
export const TableRow = forwardRef<HTMLTableRowElement, ComponentProps<"tr">>(
  ({ children, className, ...props }, ref) => (
    <tr className={twMerge(tableRowStyles, className)} ref={ref} {...props}>
      {children}
    </tr>
  )
);

TableRow.displayName = "TableRow";

/* --- TableHead --- */
export const TableHead = forwardRef<HTMLTableCellElement, ComponentProps<"th">>(
  ({ children, className, ...props }, ref) => (
    <th className={twMerge(tableHeadStyles, className)} ref={ref} {...props}>
      {children}
    </th>
  )
);

TableHead.displayName = "TableHead";

/* --- TableHeader --- */
export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"thead">
>(({ children, className, ...props }, ref) => (
  <thead className={twMerge(tableHeaderStyles, className)} ref={ref} {...props}>
    {children}
  </thead>
));

TableHeader.displayName = "TableHeader";

/* --- TableFooter --- */
export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"tfoot">
>(({ children, className, ...props }, ref) => (
  <tfoot className={twMerge(tableFooterStyles, className)} ref={ref} {...props}>
    {children}
  </tfoot>
));

TableFooter.displayName = "TableFooter";
