import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "appearance-none font-sans bg-black dark:bg-white text-white dark:text-black px-3 py-2 min-h-[2.625rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300"
);
