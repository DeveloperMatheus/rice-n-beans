import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { errorMessageStyles } from "./styles";

export type ErrorMessageProps = ComponentProps<"p"> &
  VariantProps<typeof errorMessageStyles>;
