import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import {
  tableBodyStyles,
  tableDataStyles,
  tableHeadStyles,
  tableRowStyles,
  tableStyles,
} from "./styles";

export type TableProps = ComponentProps<"table"> &
  VariantProps<typeof tableStyles>;

export type TableHeaderProps = ComponentProps<"thead"> &
  VariantProps<typeof tableHeadStyles>;

export type TableBodyProps = ComponentProps<"tbody"> &
  VariantProps<typeof tableBodyStyles>;

export type TableRowProps = ComponentProps<"tr"> &
  VariantProps<typeof tableRowStyles>;

export type TableDataProps = ComponentProps<"td"> &
  VariantProps<typeof tableDataStyles>;

export type TableHeadProps = ComponentProps<"th"> &
  VariantProps<typeof tableDataStyles>;

export type TableFooterProps = ComponentProps<"tfoot"> &
  VariantProps<typeof tableHeadStyles>;
