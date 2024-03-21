import { useEffect, useRef, useCallback } from "react";
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
  }, [isOpen, onCloseModal]);

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
