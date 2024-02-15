import { cva } from "class-variance-authority";

export const tabListStyles = cva("flex flex-row list-none border-b", {
  variants: {
    isFitted: {
      true: "items-stretch",
      false: "items-center",
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
});
