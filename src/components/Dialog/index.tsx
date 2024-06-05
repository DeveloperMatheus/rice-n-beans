"use client";

import React, { createContext, useState } from "react";
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

export const useConfirm = () => {
  const [open, setOpen] = useState(false);

  const getConfirmation = async ({
    title,
    description,
    confirmText,
    cancelText,
    variant,
  }: DialogOptions) => {
    setOpen(true);

    return new Promise<boolean>((resolve) => {
      const handleAction = (status: boolean) => {
        setOpen(false);
        resolve(status);
      };

      createPortal(
        <Modal
          isOpen={open}
          onCloseModal={() => handleAction(false)}
          className={twMerge(dialogStyles())}
        >
          <ModalHeader>
            <Text tag="h3" className="text-center">
              {title}
            </Text>
          </ModalHeader>
          <ModalContent>{description}</ModalContent>

          <ModalFooter className="space-x-3">
            <Button
              className="w-full"
              variant="outline"
              size="sm"
              onClick={() => handleAction(false)}
            >
              {cancelText}
            </Button>
            <Button
              className="w-full"
              variant={variant ?? "default"}
              size="sm"
              onClick={() => handleAction(true)}
            >
              {confirmText}
            </Button>
          </ModalFooter>
        </Modal>,
        document.body
      );
    });
  };

  return {
    getConfirmation,
  };
};
