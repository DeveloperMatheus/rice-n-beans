import { cva } from "class-variance-authority";

export const badgeStyles = cva(
  "inline-block text-center font-bold text-sm min-w-[3rem] min-h-[1.3rem] rounded-full select-none bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900"
);
