"use client";

import { forwardRef, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import {
  modalContentStyles,
  modalFooterStyles,
  modalHeaderStyles,
  modalStyles,
} from "./styles";

import {
  ModalContentProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
} from "./types";

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
      className={twMerge(modalStyles({ className }))}
      onClose={() => onCloseModal()}
      ref={ref}
      {...props}
    >
      {children}
    </dialog>
  );
};

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
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

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
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

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
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

Modal.displayName = "Modal";
ModalHeader.displayName = "ModalHeader";
ModalContent.displayName = "ModalContent";
ModalFooter.displayName = "ModalFooter";

export { Modal, ModalHeader, ModalContent, ModalFooter };
