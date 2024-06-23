"use client";

import { useState } from "react";
import { Badge, Button, Card } from "~/components/Layout";
import { Modal, ModalContent, ModalHeader } from "~/components/Modal";
import { Text } from "~/components/Typography";

const BADGE_CODE_STYLE = `
const badgeStyles = cva(
  "px-2 py-1 inline-block text-center font-bold text-sm min-w-[3rem] min-h-[1.3rem] rounded-full select-none",
  {
    variants: {
      variant: {
        default:
          "text-zinc-50 dark:text-zinc-900 hover:bg-zinc-900/90 bg-zinc-900 dark:bg-zinc-50",
        destructive:
          "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
        outline:
          "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
`;

const BADGE_CODE_COMPONENT = `
export const Badge = forwardRef<
  HTMLSpanElement,
  ComponentProps<"span"> & VariantProps<typeof badgeStyles>
>(({ children, className, variant, ...props }, ref) => (
  <span
    className={twMerge(badgeStyles({ className, variant }))}
    ref={ref}
    {...props}
  >
    {children}
  </span>
));
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
            <Card>
              <Text tag="h4">Variants</Text>
              <div className="flex items-center justify-center flex-wrap w-fit gap-5">
                <Badge>Defaut</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="secondary">Secondary</Badge>
              </div>
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
