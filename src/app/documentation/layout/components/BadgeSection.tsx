"use client";

import { useState } from "react";
import { Badge, Button, Card } from "~/components/Layout";
import { Modal, ModalContent, ModalHeader } from "~/components/Modal";
import { Text } from "~/components/Typography";

const BADGE_CODE_STYLE = `
const badgeStyles =
  "inline-block text-center font-bold text-sm min-w-[3rem] min-h-[1.3rem] rounded-full select-none bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900";
`;

const BADGE_CODE_COMPONENT = `
export const Badge = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
  ({ children, className, ...props }, ref) => (
    <span className={twMerge(badgeStyles, className)} ref={ref} {...props}>
      {children}
    </span>
  )
);

Badge.displayName = "Badge";
`;

export const BadgeSection = () => {
  const [badgeModal, setBadgeModal] = useState(false);

  return (
    <>
      <section className="mt-5 lg:mt-8">
        <div className="flex items-center justify-start gap-3">
          <Text tag="h3">Badge</Text>
          <Button onClick={() => setBadgeModal(!badgeModal)}>
            See the code
          </Button>
        </div>

        <div className="space-y-3 mt-3">
          <div>
            <Text tag="h4">Test variant</Text>
            <Card className="flex items-center justify-center flex-wrap w-fit gap-5">
              <Badge>Defaut</Badge>
            </Card>
          </div>
        </div>
      </section>
      <Modal
        className="max-w-[60rem]"
        isOpen={badgeModal}
        onCloseModal={() => setBadgeModal(false)}
      >
        <ModalHeader className="flex items-center justify-between">
          <Text tag="h3">Badge</Text>
          <Button size="sm" onClick={() => setBadgeModal(false)}>
            Close
          </Button>
        </ModalHeader>
        <ModalContent className="mt-3">
          <Card className="overflow-x-auto whitespace-pre">
            <code>{BADGE_CODE_STYLE}</code>
            <pre>{BADGE_CODE_COMPONENT}</pre>
          </Card>
        </ModalContent>
      </Modal>
    </>
  );
};
