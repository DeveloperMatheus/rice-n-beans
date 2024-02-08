import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tabPanelStyles } from "./styles";

export type TabProps = {
  title: string;
} & ComponentProps<"div"> &
  VariantProps<typeof tabPanelStyles>;
