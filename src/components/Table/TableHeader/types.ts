import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tableHeaderStyles } from "./styles";

export type TableHeaderProps = ComponentProps<"thead"> &
  VariantProps<typeof tableHeaderStyles>;
