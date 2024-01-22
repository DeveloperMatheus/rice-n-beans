import { cva } from "class-variance-authority";

export const modalStyles = cva(
  "rounded-lg w-full max-w-[40rem] open:animate-fade-in backdrop:backdrop-blur-sm"
);

export const modalHeaderStyles = cva("p-3");

export const modalContentStyles = cva("p-3");

export const modalFooterStyles = cva(
  "border-t border-zinc-200 dark:border-zinc-800 p-3 flex justify-end"
);
