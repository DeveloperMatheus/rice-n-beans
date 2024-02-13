import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { tabListStyles } from "./styles";

export type TabListProps = ComponentProps<"div"> &
  VariantProps<typeof tabListStyles>;
