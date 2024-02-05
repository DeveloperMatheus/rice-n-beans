import { cva } from "class-variance-authority";

export const modalStyles = cva(
  "rounded-lg w-full max-w-[40rem] open:animate-fade-in backdrop:backdrop-blur-sm"
);
