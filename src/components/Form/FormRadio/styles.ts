import { cva } from "class-variance-authority";

export const radioStyles = cva(
  "block h-standard w-full appearance-none rounded-lg border-2 border-shape_green focus:border-shape_green_2 px-3 py-1 placeholder-gray-500 placeholder:font-normal font-normal text-sm text-gray-500 focus:outline-none focus:z-10 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      isReadOnly: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
  }
);
