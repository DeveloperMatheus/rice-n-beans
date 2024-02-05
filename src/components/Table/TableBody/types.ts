import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tableBodyStyles } from "./styles";

export type TableBodyProps = ComponentProps<"tbody"> &
  VariantProps<typeof tableBodyStyles>;
