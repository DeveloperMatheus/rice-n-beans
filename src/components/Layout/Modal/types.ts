import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { modalStyles } from "./styles";

export type ModalProps = {
  isOpen: boolean;
  onCloseModal: () => void;
} & ComponentProps<"dialog"> &
  VariantProps<typeof modalStyles>;
