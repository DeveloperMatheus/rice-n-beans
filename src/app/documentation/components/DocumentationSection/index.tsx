"use client";

import { useState } from "react";
import { Button, Card } from "~/components/Layout";
import { Modal, ModalContent, ModalHeader } from "~/components/Modal";
import { Text } from "~/components/Typography";

export const DocumentationSection = ({
  title,
  codeStyle,
  codeComponent,
  children,
}: {
  title: string;
  codeStyle: string;
  codeComponent: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section>
        <div className="flex items-center justify-start gap-3">
          <Text tag="h3">{title}</Text>
          <Button onClick={() => setOpen(!isOpen)}>See the code</Button>
        </div>

        {children}
      </section>
      <Modal
        className="max-w-[60rem]"
        isOpen={isOpen}
        onCloseModal={() => setOpen(false)}
      >
        <ModalHeader className="flex items-center justify-between">
          <Text tag="h3">{title}</Text>
          <Button size="sm" onClick={() => setOpen(false)}>
            Close
          </Button>
        </ModalHeader>
        <ModalContent className="mt-3">
          <Card className="overflow-x-auto whitespace-pre">
            <code>{codeStyle}</code>
            <code>{codeComponent}</code>
          </Card>
        </ModalContent>
      </Modal>
    </>
  );
};
