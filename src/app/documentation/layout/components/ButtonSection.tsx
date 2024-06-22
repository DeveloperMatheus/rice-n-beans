"use client";

import { useState } from "react";
import { Button, Card } from "~/components/Layout";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "~/components/Modal";
import { Text } from "~/components/Typography";

export const ButtonSection = () => {
  const [buttonModal, setButtonModal] = useState(false);

  return (
    <>
      <section className="space-y-3 mt-5 lg:mt-8">
        <div className="flex items-center justify-start gap-3">
          <Text tag="h3">Button</Text>
          <Button onClick={() => setButtonModal(!buttonModal)}>
            See the code
          </Button>
        </div>
        <Card className="block xl:inline-block space-x-5">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
        </Card>
      </section>
      <Modal isOpen={buttonModal} onCloseModal={() => setButtonModal(false)}>
        <ModalHeader className="text-center">Button</ModalHeader>
        <ModalContent className="mt-3">
          <Card>Test</Card>
        </ModalContent>
      </Modal>
    </>
  );
};
