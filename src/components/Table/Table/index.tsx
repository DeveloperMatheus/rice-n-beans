import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tableStyles } from "./styles";
import { TableProps } from "./types";

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, ...props }, ref) => (
    <table className={twMerge(tableStyles({ className }))} ref={ref} {...props}>
      {children}
    </table>
  )
);

Table.displayName = "Table";
