import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { modalContentStyles, modalFooterStyles, modalStyles } from "./styles";

export type ModalProps = {
  isOpen: boolean;
  onCloseModal: () => void;
} & ComponentProps<"dialog"> &
  VariantProps<typeof modalStyles>;

export type ModalHeaderProps = ComponentProps<"div"> &
  VariantProps<typeof modalContentStyles>;

export type ModalContentProps = ComponentProps<"div"> &
  VariantProps<typeof modalContentStyles>;

export type ModalFooterProps = ComponentProps<"div"> &
  VariantProps<typeof modalFooterStyles>;
