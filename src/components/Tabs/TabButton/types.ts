import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tabButtonStyles } from "./styles";

export type TabButtonProps = {
  title: string;
  index: number;
  isActive: boolean;
  setSelectedTab: (index: number) => void;
} & ComponentProps<"button"> &
  VariantProps<typeof tabButtonStyles>;
