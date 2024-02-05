import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { modalHeaderStyles } from "./styles";

export type ModalHeaderProps = ComponentProps<"div"> &
  VariantProps<typeof modalHeaderStyles>;
