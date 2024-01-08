import { cva } from "class-variance-authority";

export const switchStyles = cva(
  "appearance-none cursor-pointer bg-white dark:bg-zinc-950 w-12 h-6 border border-zinc-200 dark:border-zinc-800 rounded-full relative before:absolute before:top-[0.88rem] before:-translate-x-1 checked:before:translate-x-[1.25rem] before:-translate-y-1/2 before:transition-all before:content-circleIcon before:brightness-[.8] dark:before:brightness-[.4] checked:before:brightness-0 dark:checked:before:brightness-200 disabled:opacity-30 disabled:cursor-not-allowed"
);
