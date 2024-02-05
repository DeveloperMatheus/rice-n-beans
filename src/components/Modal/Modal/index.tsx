import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ModalProps } from "./types";
import { modalStyles } from "./styles";

export const Modal = ({
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

Modal.displayName = "Modal";
