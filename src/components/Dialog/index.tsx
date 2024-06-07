"use client";

import React, { useState } from "react";
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

const createPromise = () => {
  let resolver;
  return [
    new Promise((resolve: (value: boolean) => void, reject) => {
      resolver = resolve;
    }),
    resolver,
  ];
};

const useConfirm = () => {
  const [open, setOpen] = useState(false);
  const [resolver, setResolver] = useState<{
    resolver?: Promise<boolean>;
  }>({ resolver: undefined });
  const [options, setOptions] = useState<DialogOptions>();

  const getConfirmation = async (text: DialogOptions) => {
    setOptions(text);
    setOpen(true);
    const [promise, resolve] = createPromise();
    console.log("🚀 ~ getConfirmation ~ promise:", promise);
    console.log("🚀 ~ getConfirmation ~ resolve:", resolve);
    setResolver({ resolve });
    return promise;
  };

  const handleAction = async (status: boolean) => {
    setOpen(false);
    resolver.resolve(status);
  };

  const Dialog = () => (
    <Modal
      isOpen={open}
      onCloseModal={() => handleAction(false)}
      className={twMerge(dialogStyles())}
    >
      <ModalHeader>
        <Text tag="h3" className="text-center">
          {options?.title}
        </Text>
      </ModalHeader>
      <ModalContent>{options?.description}</ModalContent>

      <ModalFooter className="space-x-3">
        <Button
          className="w-full"
          variant="outline"
          size="sm"
          onClick={() => handleAction(false)}
        >
          {options?.cancelText}
        </Button>
        <Button
          className="w-full"
          variant={options?.variant ?? "default"}
          size="sm"
          onClick={() => handleAction(true)}
        >
          {options?.confirmText}
        </Button>
      </ModalFooter>
    </Modal>
  );

  return { getConfirmation, Dialog };
};

export default useConfirm;
