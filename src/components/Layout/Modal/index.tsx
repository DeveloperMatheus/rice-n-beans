"use client";

import { forwardRef, useEffect, useRef } from "react";

import { modalContentStyles, modalFooterStyles, modalStyles } from "./styles";
import { ModalContentProps, ModalFooterProps, ModalProps } from "./types";

const Modal = ({
  children,
  className,
  isOpen,
  onCloseModal,
  ...props
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      return ref.current?.showModal();
    }

    ref.current?.close();
  }, [isOpen]);

  return (
    <dialog
      className={modalStyles({ className })}
      onClose={() => onCloseModal()}
      ref={ref}
      {...props}
    >
      {children}
    </dialog>
  );
};

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...props }, ref) => (
    <div className={modalContentStyles({ className })} ref={ref} {...props}>
      {children}
    </div>
  )
);

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => (
    <div className={modalFooterStyles({ className })} ref={ref} {...props}>
      {children}
    </div>
  )
);

Modal.displayName = "Modal";
ModalContent.displayName = "ModalContent";
ModalFooter.displayName = "ModalFooter";

export { Modal, ModalContent, ModalFooter };
