"use client";

import { Search } from "lucide-react";
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
      <section className="mt-5 lg:mt-8">
        <div className="flex items-center justify-start gap-3">
          <Text tag="h3">Button</Text>
          <Button onClick={() => setButtonModal(!buttonModal)}>
            See the code
          </Button>
        </div>

        <div className="space-y-3 mt-3">
          <div>
            <Text tag="h4">Variants</Text>
            <Card className="flex items-center justify-center flex-wrap w-fit gap-5">
              <Button>Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
            </Card>
          </div>

          <div>
            <Text tag="h4">Size</Text>
            <Card className="flex items-center justify-center flex-wrap w-fit gap-5">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" className="flex items-center justify-center">
                <Search size={22} />
              </Button>
            </Card>
          </div>
        </div>
      </section>
      <Modal isOpen={buttonModal} onCloseModal={() => setButtonModal(false)}>
        <ModalHeader className="text-center">Button</ModalHeader>
        <ModalContent className="mt-3">
          <Card>Test</Card>
        </ModalContent>
        <ModalFooter>
          <Button size="sm" onClick={() => setButtonModal(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
