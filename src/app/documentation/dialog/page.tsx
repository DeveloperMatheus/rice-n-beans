import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";
import { DialogSection } from "./components/DialogSection";

const DIALOG_CODE_STYLE = `"use client";

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
`;

const DIALOG_CODE_COMPONENT = `
type DialogContextProps = {
  render: (modal: DialogProps, handleAction: (result: boolean) => void) => void;
};

const DialogContext = createContext<DialogContextProps>({
  render: () => {},
});

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<
    DialogProps & { action: (value: boolean) => void }
  >();

  const render = (
    modal: DialogProps,
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
    <DialogContext.Provider value={{ render }}>
      {children}

      {isOpen &&
        createPortal(
          <DialogModal
            variant={modal?.variant}
            open={isOpen}
            header={modal?.header}
            content={modal?.content}
            rejectText={modal?.rejectText}
            confirmText={modal?.confirmText}
            handleAction={modal?.action}
          />,
          document.body
        )}
    </DialogContext.Provider>
  );
};

type DialogProps = {
  header?: string;
  content?: string;
  confirmText?: string;
  rejectText?: string;
  variant?:
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
  header = "Are you sure?",
  content = "This action cannot be undone.",
  rejectText = "Cancel",
  confirmText = "Confirm",
  variant = "default",
}: DialogProps & {
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
          {header}
        </Text>
      </ModalHeader>
      <ModalContent>{content}</ModalContent>

      <ModalFooter className="space-x-3">
        <Button
          className="w-full"
          variant="outline"
          size="sm"
          onClick={() => handleClose(false)}
        >
          {rejectText}
        </Button>
        <Button
          className="w-full"
          variant={variant}
          size="sm"
          onClick={() => handleClose(true)}
        >
          {confirmText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export const useConfirm = () => {
  const dialogContext = useContext(DialogContext);

  const getConfirmation = async (modal: DialogProps): Promise<boolean> => {
    const reactionPromise = new Promise<boolean>((resolve) => {
      dialogContext.render(modal, resolve);
    });

    return reactionPromise;
  };

  return {
    getConfirmation,
  };
};
`;

const DIALOG_CODE_VIEW = `"use client";

import { useConfirm } from "~/components/Dialog";
import { Button } from "~/components/Layout";

export const DialogSection = () => {
  const { getConfirmation } = useConfirm();

  async function callDialog() {
    const res = await getConfirmation({
      header: "Commit Tax Fraud?",
      content:
        "Are you sure you wanna commit tax fraud? This action is irreversible. Take a look at the console on developer tools to see the result. Are you sure you wanna commit tax fraud? This action is irreversible. Take a look at the console on developer tools to see the result.",
      confirmText: "Of Course :)",
      rejectText: "No :(",
    });

    console.log("res => ", res);
  }

  return <Button onClick={() => callDialog()}>Call dialog</Button>;
};
`;

export default function DocumentationDialogPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Dialog</Text>

        <Text tag="h2">
          Dialog is a service that provides a way to create confirmation dialog
          through the use of a hook (therefore, it is a client side code), that
          calls an awaitable Modal component.
        </Text>

        <Text tag="h3">
          Depending on where you click (outside the dialog or on the buttons),
          the promise will resolve with a boolean value.
        </Text>
      </div>

      <DocumentationSection
        title="Dialog"
        codeStyle={DIALOG_CODE_STYLE}
        codeComponent={DIALOG_CODE_COMPONENT}
      >
        <Tabs defaultValue="view" className="mt-3">
          <TabList>
            <Tab id="view">View</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
          <TabPanel id="view">
            <DialogSection />
          </TabPanel>
          <TabPanel id="code" className="overflow-auto">
            <code className="whitespace-pre">{DIALOG_CODE_VIEW}</code>
          </TabPanel>
        </Tabs>
      </DocumentationSection>
    </section>
  );
}
