import { cva } from "class-variance-authority";

export const switchStyles = cva(
  "appearance-none cursor-pointer w-12 h-6 border border-zinc-200 dark:border-zinc-800 rounded-full relative bg-zinc-200 dark:bg-zinc-950 checked:bg-black checked:dark:bg-white before:absolute before:top-[0.88rem] before:-translate-x-1 checked:before:translate-x-[1.25rem] before:-translate-y-1/2 before:transition-all before:content-circleIcon dark:before:brightness-[.4] checked:before:brightness-200 dark:checked:before:brightness-0 disabled:opacity-30 disabled:cursor-not-allowed"
);
