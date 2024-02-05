import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tableBodyStyles } from "./styles";
import { TableBodyProps } from "./types";

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

TableBody.displayName = "TableBody";
