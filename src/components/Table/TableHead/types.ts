import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tableHeadStyles } from "./styles";

export type TableHeadProps = ComponentProps<"th"> &
  VariantProps<typeof tableHeadStyles>;
