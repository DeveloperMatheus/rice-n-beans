import { cva } from "class-variance-authority";

export const tableRowStyles = cva(
  "[&:not(:last-child)]:border-b border-zinc-200 dark:border-zinc-800"
);
