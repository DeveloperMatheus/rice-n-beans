import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";

import { formErrorMessageStyles } from "./styles";

export type FormErrorMessageProps = ComponentProps<"p"> &
  VariantProps<typeof formErrorMessageStyles>;
