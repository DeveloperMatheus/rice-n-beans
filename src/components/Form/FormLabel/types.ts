import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { formLabelStyles } from "./styles";

export type FormLabelProps = ComponentProps<"label"> &
  VariantProps<typeof formLabelStyles>;
