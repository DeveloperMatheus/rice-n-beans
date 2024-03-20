import { cva } from "class-variance-authority";

export const checkboxStyles = cva(
  "bg-white dark:bg-zinc-950 rounded-md h-5 w-5 cursor-pointer appearance-none border border-zinc-200 dark:border-zinc-800 checked:relative checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:w-[0.8rem] checked:before:h-[0.8rem] checked:before:leading-none checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:content-checkIcon checked:before:brightness-0 dark:checked:before:brightness-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300"
);
