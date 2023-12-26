import { cva } from "class-variance-authority";

export const checkboxStyles = cva(
  "bg-white dark:bg-zinc-950 rounded-md h-5 w-5 cursor-pointer appearance-none border border-zinc-200 dark:border-zinc-800 checked:relative checked:before:absolute checked:before:top-2.5 checked:before:left-1/2 checked:before:w-[0.8rem] checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:content-checkIcon checked:before:brightness-0 dark:checked:before:brightness-200"
);
