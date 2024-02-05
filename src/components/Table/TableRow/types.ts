import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tableRowStyles } from "./styles";

export type TableRowProps = ComponentProps<"tr"> &
  VariantProps<typeof tableRowStyles>;
