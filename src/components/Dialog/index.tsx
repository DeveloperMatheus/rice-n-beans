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
  const [label, setLabel] = useState("");

  const getConfirmation = async (text: string) => {
    setLabel(text);
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

  const Confirmation = () => (
    <Modal
      isOpen={open}
      onCloseModal={() => handleAction(false)}
      className={twMerge(dialogStyles())}
    >
      <ModalHeader>
        <Text tag="h3" className="text-center">
          {/* {title} */}
          Title
        </Text>
      </ModalHeader>
      <ModalContent>
        {/* {body} */}
        Body
      </ModalContent>

      <ModalFooter className="space-x-3">
        <Button
          className="w-full"
          variant="outline"
          size="sm"
          onClick={() => handleAction(false)}
        >
          {/* {cancelText} */}
          Cancel
        </Button>
        <Button
          className="w-full"
          // variant={variant}
          variant="destructive"
          size="sm"
          onClick={() => handleAction(true)}
        >
          {/* {confirmText} */}
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );

  return [getConfirmation, Confirmation];
};

export default useConfirm;
