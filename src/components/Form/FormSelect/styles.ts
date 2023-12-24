import { cva } from "class-variance-authority";

export const selectStyles = cva(
  "text-default appearance-none text-sm flex justify-between items-center w-full h-11 rounded-lg pl-3 pr-9 py-1 border-2 focus:ring-blue-500 focus:border-primary border-gray-200 dark:bg-white dark:focus:ring-blue-500 dark:focus:border-primary",
  {
    variants: {
      isDisabled: {
        true: "opacity-50 cursor-not-allowed",
      },
      isReadOnly: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
  }
);
