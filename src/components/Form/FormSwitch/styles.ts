import { cva } from "class-variance-authority";

export const switchStyles = cva(
  // "appearance-none cursor-pointer w-12 h-6 border border-zinc-200 dark:border-zinc-800 rounded-full relative bg-zinc-200 dark:bg-zinc-950 before:translate-x-2 checked:bg-black checked:dark:bg-white checked:before:absolute checked:before:-translate-y-1/2 checked:before:top-1/2 checked:before:translate-x-8 before:transition-all before:content-[''] before:w-[0.6rem] before:h-[0.6rem] before:rounded-full before:bg-white dark:checked:before:bg-black disabled:opacity-30 disabled:cursor-not-allowed"
  "appearance-none cursor-pointer w-12 h-6 border border-zinc-200 dark:border-zinc-800 rounded-full relative bg-zinc-200 dark:bg-zinc-950 before:w-[0.7rem] before:h-[0.7rem] before:bg-white before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:translate-x-1 checked:before:translate-x-[1.92rem] before:transition-all disabled:opacity-30 disabled:cursor-not-allowed"
);
