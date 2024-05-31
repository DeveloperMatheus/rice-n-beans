"use client";

import React, { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "~/components/Modal";
import { Button } from "~/components/Layout";
import { cva } from "class-variance-authority";
import { Text } from "~/components/Typography";

type DialogProps = {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  title: string;
  body?: string;
  cancelText?: string;
  confirmText?: string;
} & ComponentProps<"div">;

const dialogStyles = cva("max-w-[20rem] select-text");

export const Dialog = ({
  title,
  body,
  cancelText = "Cancel",
  confirmText = "Confirm",
  className,
  variant = "default",
}: DialogProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onCloseModal={() => setIsOpen(false)}
      className={twMerge(dialogStyles({ className }))}
    >
      <ModalHeader>
        <Text tag="h3" className="text-center">
          {title}
        </Text>
      </ModalHeader>
      <ModalContent>{body}</ModalContent>

      <ModalFooter className="space-x-3">
        <Button
          className="w-full"
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(false)}
        >
          {cancelText}
        </Button>
        <Button
          className="w-full"
          variant={variant}
          size="sm"
          onClick={() => setIsOpen(false)}
        >
          {confirmText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

Dialog.displayName = "Dialog";
