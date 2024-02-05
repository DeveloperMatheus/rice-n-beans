import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ModalContentProps } from "./types";
import { modalContentStyles } from "./styles";

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(modalContentStyles({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

ModalContent.displayName = "ModalContent";
