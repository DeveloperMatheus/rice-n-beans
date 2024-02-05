import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ModalHeaderProps } from "./types";
import { modalHeaderStyles } from "./styles";

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(modalHeaderStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

ModalHeader.displayName = "ModalHeader";
