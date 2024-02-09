import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tabButtonStyles } from "./styles";

export type TabButtonProps = {
  title: string;
  id: string;
} & ComponentProps<"button"> &
  VariantProps<typeof tabButtonStyles>;
