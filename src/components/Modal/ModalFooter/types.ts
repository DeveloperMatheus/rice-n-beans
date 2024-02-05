import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { modalFooterStyles } from "./styles";

export type ModalFooterProps = ComponentProps<"div"> &
  VariantProps<typeof modalFooterStyles>;
