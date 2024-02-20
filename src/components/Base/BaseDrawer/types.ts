import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { baseDrawerStyles } from "./styles";

export type BaseDrawerProps = ComponentProps<"div"> &
  VariantProps<typeof baseDrawerStyles>;

// export type BaseDrawerContext = {
//   isDrawerOpen: boolean | undefined;
//   setIsDrawerOpen: (isOpen: boolean) => void;
// };
