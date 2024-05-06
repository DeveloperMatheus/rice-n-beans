import { twMerge } from "tailwind-merge";

import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const textStyles = cva("font-sans text-black dark:text-white", {
  variants: {
    tag: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-bold",
      h4: "text-xl font-bold",
      h5: "text-lg font-bold",
      h6: "text-base font-bold",
      p: "text-base font-normal",
      span: "text-base font-normal",
    },
  },
});

type TextProps = {
  children: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
} & VariantProps<typeof textStyles>;

export const Text = ({ tag = "p", children, className }: TextProps) =>
  React.createElement(
    tag,
    { className: twMerge(textStyles({ className, tag })) },
    children
  );
