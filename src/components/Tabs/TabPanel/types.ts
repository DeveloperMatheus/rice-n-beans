import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tabPanelStyles } from "./styles";

export type TabPanelProps = {
  id: string;
} & ComponentProps<"div"> &
  VariantProps<typeof tabPanelStyles>;
