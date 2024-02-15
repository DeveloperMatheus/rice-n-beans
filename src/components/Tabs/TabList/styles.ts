import { cva } from "class-variance-authority";

export const tabListStyles = cva(
  "flex flex-row items-center list-none border-b",
  {
    variants: {
      position: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
      },
    },
    defaultVariants: {
      position: "start",
    },
  }
);
