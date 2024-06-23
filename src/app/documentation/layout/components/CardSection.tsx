"use client";

import { useState } from "react";
import { Badge, Button, Card } from "~/components/Layout";
import { Modal, ModalContent, ModalHeader } from "~/components/Modal";
import { Text } from "~/components/Typography";

const CARD_CODE_STYLE = `
const cardStyles =
  "bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 shadow-sm";

`;

const CARD_CODE_COMPONENT = `
export const Card = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div className={twMerge(cardStyles, className)} ref={ref} {...props}>
      {children}
    </div>
  )
);

Card.displayName = "Card";
`;

export const CardSection = () => {
  const [cardModal, setCardModal] = useState(false);

  return (
    <>
      <section className="mt-5 lg:mt-8">
        <div className="flex items-center justify-start gap-3">
          <Text tag="h3">Card</Text>
          <Button onClick={() => setCardModal(!cardModal)}>See the code</Button>
        </div>

        <div className="space-y-3 mt-3">
          <Card>
            <div className="w-fit">
              <Card>This is a card inside another card</Card>
            </div>
          </Card>
        </div>
      </section>
      <Modal
        className="max-w-[60rem]"
        isOpen={cardModal}
        onCloseModal={() => setCardModal(false)}
      >
        <ModalHeader className="flex items-center justify-between">
          <Text tag="h3">Card</Text>
          <Button size="sm" onClick={() => setCardModal(false)}>
            Close
          </Button>
        </ModalHeader>
        <ModalContent className="mt-3">
          <Card className="overflow-x-auto whitespace-pre">
            <code>{CARD_CODE_STYLE}</code>
            <pre>{CARD_CODE_COMPONENT}</pre>
          </Card>
        </ModalContent>
      </Modal>
    </>
  );
};
