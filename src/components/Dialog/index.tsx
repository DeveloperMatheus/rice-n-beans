"use client";

import React, { createContext, useContext, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "~/components/Modal";
import { Text } from "~/components/Typography";
import { Button } from "~/components/Layout";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";

const dialogStyles = cva("max-w-[20rem] select-text");

type DialogOptions = {
  title: string;
  description: string;
  confirmText: string;
  cancelText: string;
  variant:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
};

const DialogModal = ({
  open,
  handleAction,
}: {
  open: boolean;
  handleAction?: (value: boolean) => void;
}) => {
  function handleClose(value: boolean) {
    if (!handleAction) return;
    handleAction(value);
  }
  return (
    <Modal
      isOpen={open}
      onCloseModal={() => handleClose(false)}
      className={twMerge(dialogStyles())}
    >
      <ModalHeader>
        <Text tag="h3" className="text-center">
          title
        </Text>
      </ModalHeader>
      <ModalContent>description</ModalContent>

      <ModalFooter className="space-x-3">
        <Button
          className="w-full"
          variant="outline"
          size="sm"
          onClick={() => handleClose(false)}
        >
          cancel
        </Button>
        <Button
          className="w-full"
          variant="default"
          size="sm"
          onClick={() => handleClose(true)}
        >
          confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};

/* --- Context --- */
interface ModalContextProps {
  render: (modal: ModalProps, handleAction: (result: any) => void) => void;
}

export interface ModalProps {
  header?: string;
  content?: string;
  confirmText?: string;
  rejectText?: string;
  action?: (result: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  render: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<ModalProps>({});

  const render = (
    modal: ModalProps,
    handleAction: (result: boolean) => void
  ) => {
    setModal({
      ...modal,
      action: (result) => {
        setIsOpen(false);
        handleAction(result);
      },
    });

    setIsOpen(true);
  };

  return (
    <ModalContext.Provider value={{ render }}>
      {children}

      {isOpen &&
        createPortal(
          <DialogModal open={isOpen} handleAction={modal?.action} />,
          document.body
        )}
    </ModalContext.Provider>
  );
};

/* --- Hook --- */
export const useModal = () => {
  const modalContext = useContext(ModalContext);

  const open = async (modal: ModalProps): Promise<boolean> => {
    const reactionPromise = new Promise<boolean>((resolve) => {
      modalContext.render(modal, resolve);
    });

    return reactionPromise;
  };

  return {
    open,
  };
};
