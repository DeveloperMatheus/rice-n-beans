import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tableStyles } from "./styles";

export type TableProps = ComponentProps<"table"> &
  VariantProps<typeof tableStyles>;
