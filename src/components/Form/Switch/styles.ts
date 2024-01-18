import { cva } from "class-variance-authority";

export const switchStyles = cva(
  "appearance-none cursor-pointer w-12 h-6 dark:border-zinc-800 rounded-full relative bg-zinc-200 dark:bg-zinc-950 checked:bg-black checked:dark:bg-white before:w-[0.8rem] before:h-[0.8rem] before:bg-white dark:checked:before:bg-black before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:translate-x-1 checked:before:translate-x-[1.95rem] before:transition-all focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed"
);
