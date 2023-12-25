import { cva } from "class-variance-authority";

export const radioStyles = cva(
  "w-5 h-5 accent-black dark:accent-white disabled:cursor-not-allowed disabled:opacity-50"
);
