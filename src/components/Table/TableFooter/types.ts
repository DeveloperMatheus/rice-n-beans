import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tableFooterStyles } from "./styles";

export type TableFooterProps = ComponentProps<"tfoot"> &
  VariantProps<typeof tableFooterStyles>;
