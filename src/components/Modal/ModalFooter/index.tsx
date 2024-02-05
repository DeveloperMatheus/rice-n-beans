import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ModalFooterProps } from "./types";
import { modalFooterStyles } from "./styles";

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(modalFooterStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

ModalFooter.displayName = "ModalFooter";
