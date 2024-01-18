import { cva } from "class-variance-authority";

export const radioStyles = cva(
  "appearance-none cursor-pointer w-5 h-5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full relative checked:before:absolute checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:top-1/2 checked:before:left-1/2 checked:before:content-[''] checked:before:w-[0.6em] checked:before:h-[0.6em] checked:before:rounded-full checked:before:bg-black dark:checked:before:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 disabled:cursor-not-allowed disabled:opacity-50"
);
