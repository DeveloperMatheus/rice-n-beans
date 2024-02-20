import { cva } from "class-variance-authority";

export const baseDrawerStyles = cva("bg-green-800 h-screen", {
  variants: {
    isDrawerOpen: {
      true: "w-72",
      false: "w-10",
    },
  },
});
