import { Text } from "~/components/Typography";
import { DocumentationSection } from "../components/DocumentationSection";
import { Button, Card } from "~/components/Layout";
import Link from "next/link";

const CODE_MODAL_STLYES = `
"use client";

import {
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { twMerge } from "tailwind-merge";

const modalStyles =
  "rounded-lg w-full max-w-[40rem] open:animate-modal backdrop:backdrop-blur-sm open:backdrop:animate-fade-in";
const modalContentStyles = "px-3 pb-3";
const modalHeaderStyles = "px-3 pt-3";
const modalFooterStyles =
  "border-t border-zinc-200 dark:border-zinc-800 p-3 flex justify-end";
`;

const CODE_MODAL_COMPONENT = `
type ModalProps = {
  isOpen: boolean;
  onCloseModal: () => void;
} & ComponentProps<"dialog">;

export const Modal = ({
  children,
  className,
  isOpen,
  onCloseModal,
  ...props
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current !== event.target) return;
      onCloseModal();
    },
    [onCloseModal]
  );

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      document.addEventListener("click", handleClickOutside);
      return;
    }

    ref.current?.close();
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <dialog
      className={twMerge(modalStyles, className)}
      onClose={() => onCloseModal()}
      ref={ref}
      {...props}
    >
      {children}
    </dialog>
  );
};

Modal.displayName = "Modal";

/* --- ModalContent --- */
export const ModalContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      className={twMerge(modalContentStyles, className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

ModalContent.displayName = "ModalContent";

/* --- ModalHeader --- */
export const ModalHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div className={twMerge(modalHeaderStyles, className)} ref={ref} {...props}>
      {children}
    </div>
  )
);

ModalHeader.displayName = "ModalHeader";

/* --- ModalFooter --- */
export const ModalFooter = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div className={twMerge(modalFooterStyles, className)} ref={ref} {...props}>
      {children}
    </div>
  )
);

ModalFooter.displayName = "ModalFooter";
`;
export default function DocumentationFormPage() {
  return (
    <section>
      <div className="space-y-3">
        <Text tag="h1">Modal</Text>

        <Text tag="h2">
          Modal is a controlled component made through the use of the{" "}
          {`<dialog>`} api. It is a blocking element so the user cannot interact
          with the rest of the page until the modal is closed.
        </Text>

        <Text tag="span">
          The modal is compose by the following components: {`<Modal>`},{" "}
          {`<ModalContent>`}, {`<ModalHeader>`} and {`<ModalFooter>`}. See:
          <Link href="https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog">
            {" "}
            https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog
          </Link>
        </Text>
      </div>

      <DocumentationSection
        title="Modal"
        codeStyle={CODE_MODAL_STLYES}
        codeComponent={CODE_MODAL_COMPONENT}
      />
    </section>
  );
}
