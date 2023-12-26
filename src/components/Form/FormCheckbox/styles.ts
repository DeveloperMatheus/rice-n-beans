import { cva } from "class-variance-authority";

export const checkboxStyles = cva(
  "bg-white rounded-md h-5 w-5 cursor-pointer appearance-none border border-opacity-20 dark:border-zinc-800 dark:bg-zinc-950 focus:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 checked:relative checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:w-[0.8rem] checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:content-checkIcon checked:before:content:text-white"
);
