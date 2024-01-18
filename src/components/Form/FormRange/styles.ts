import { cva } from "class-variance-authority";

export const rangeStyles = cva(
  "appearance-none focus:outline-none cursor-pointer h-2 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 rounded-full disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:dark:bg-white [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:focus:outline-none [&::-webkit-slider-thumb]:focus:ring-2 [&::-webkit-slider-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:focus:ring-black [&::-webkit-slider-thumb]:focus:dark:ring-white [&::-webkit-slider-thumb]:focus:dark:ring-offset-zinc-800 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:dark:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:focus:outline-none [&::-moz-range-thumb]:focus:ring-2 [&::-moz-range-thumb]:focus:ring-offset-2 [&::-moz-range-thumb]:focus:ring-black [&::-moz-range-thumb]:focus:dark:ring-white [&::-moz-range-thumb]:focus:dark:ring-offset-zinc-800"
);
