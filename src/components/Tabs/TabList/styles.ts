import { cva } from "class-variance-authority";

export const tabListStyles = cva(
  "flex flex-row items-center list-none border-b",
  {
    variants: {
      isFitted: {
        true: "shrink-1",
        false: "shrink-0",
      },
      position: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
      },
    },
    defaultVariants: {
      isFitted: false,
      position: "start",
    },
  }
);
