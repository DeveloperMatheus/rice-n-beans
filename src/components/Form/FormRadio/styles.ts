import { cva } from "class-variance-authority";

export const radioStyles = cva(
  "appearance-none w-5 h-5 border rounded-full disabled:cursor-not-allowed disabled:opacity-50"
);
