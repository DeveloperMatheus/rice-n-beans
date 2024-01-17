import { cva } from "class-variance-authority";

export const rangeStyles = cva(
  "appearance-none relative focus:outline-none cursor-pointer h-2 border border-zinc-200 dark:border-zinc-800 rounded-full disabled:cursor-not-allowed disabled:opacity-50"
);
