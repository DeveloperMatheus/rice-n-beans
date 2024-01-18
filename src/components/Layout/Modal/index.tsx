"use client";

import { useEffect, useRef } from "react";

import { modalStyles } from "./styles";
import { ModalProps } from "./types";
import { Button } from "~/components/Layout";

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
      className={modalStyles({ className })}
      onClose={() => onCloseModal()}
      ref={ref}
      {...props}
    >
      <div className="p-3">{children}</div>
      <div className="border-t p-3 flex justify-end">
        <Button size="sm" onClick={() => onCloseModal()}>
          Close
        </Button>
      </div>
    </dialog>
  );
};

Modal.displayName = "Modal";
