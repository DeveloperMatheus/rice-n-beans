import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { modalContentStyles } from "./styles";

export type ModalContentProps = ComponentProps<"div"> &
  VariantProps<typeof modalContentStyles>;
