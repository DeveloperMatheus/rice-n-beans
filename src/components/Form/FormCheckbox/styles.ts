import { cva } from "class-variance-authority";

export const checkboxStyles = cva(
  "flex flex-row items-center justify-start hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
      isReadOnly: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
  }
);
