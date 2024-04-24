"use client";

import {
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { twMerge } from "tailwind-merge";

const modalStyles =
  "rounded-lg w-full max-w-[40rem] open:animate-fade-in backdrop:backdrop-blur-sm";

const modalContentStyles = "p-3";

const modalHeaderStyles = "p-3";

const modalFooterStyles =
  "border-t border-zinc-200 dark:border-zinc-800 p-3 flex justify-end";

/* --- Modal --- */
type ModalProps = {
  isOpen: boolean;
  onCloseModal: () => void;
} & ComponentProps<"dialog">;

export const Modal = ({
  children,
  className,
  isOpen,
  onCloseModal,
  ...props
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current !== event.target) return;
      onCloseModal();
    },
    [onCloseModal]
  );

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      document.addEventListener("click", handleClickOutside);
      return;
    }

    ref.current?.close();
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <dialog
      className={twMerge(modalStyles, className)}
      onClose={() => onCloseModal()}
      ref={ref}
      {...props}
    >
      {children}
    </dialog>
  );
};

Modal.displayName = "Modal";

/* --- ModalContent --- */
export const ModalContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(modalContentStyles, className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

ModalContent.displayName = "ModalContent";

/* --- ModalHeader --- */
export const ModalHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div className={twMerge(modalHeaderStyles, className)} ref={ref} {...props}>
      {children}
    </div>
  )
);

ModalHeader.displayName = "ModalHeader";

/* --- ModalFooter --- */
export const ModalFooter = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div className={twMerge(modalFooterStyles, className)} ref={ref} {...props}>
      {children}
    </div>
  )
);

ModalFooter.displayName = "ModalFooter";
