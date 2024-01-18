import { cva } from "class-variance-authority";

export const selectStyles = cva(
  "w-full font-sans appearance-none rounded-lg border border-zinc-200 bg-white pl-3 pr-8 py-2 ring-offset-white placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:placeholder:text-zinc-400"
);
