import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tableDataStyles } from "./styles";

export type TableDataProps = ComponentProps<"td"> &
  VariantProps<typeof tableDataStyles>;
