"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Button, Card } from "~/components/Layout";
import { Modal, ModalContent, ModalHeader } from "~/components/Modal";
import { Text } from "~/components/Typography";

const BUTTON_CODE_STYLE = `
const buttonStyles = cva(
  "appearance-none font-sans rounded-lg disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        destructive:
          "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-red-900",
        outline:
          "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        ghost:
          "text-black dark:text-white hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },
      size: {
        default: "min-h-[2.625rem] px-3 py-2",
        sm: "min-h-9 rounded-md px-3",
        lg: "min-h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
`;

const BUTTON_CODE_COMPONENT = `
export const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button"> & VariantProps<typeof buttonStyles>
>(({ children, className, variant, size, ...props }, ref) => (
  <button
    className={twMerge(buttonStyles({ className, variant, size }))}
    ref={ref}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = "Button";
`;

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
              <Button>
                <Search size={22} />
              </Button>
            </Card>
          </div>
        </div>
      </section>
      <Modal
        className="max-w-[60rem]"
        isOpen={buttonModal}
        onCloseModal={() => setButtonModal(false)}
      >
        <ModalHeader className="flex items-center justify-between">
          <Text tag="h3">Button</Text>
          <Button size="sm" onClick={() => setButtonModal(false)}>
            Close
          </Button>
        </ModalHeader>
        <ModalContent className="mt-3">
          <Card className="overflow-x-auto whitespace-pre">
            <code>{BUTTON_CODE_STYLE}</code>
            <pre>{BUTTON_CODE_COMPONENT}</pre>
          </Card>
        </ModalContent>
      </Modal>
    </>
  );
};
