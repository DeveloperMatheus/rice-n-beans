import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { baseStyles } from "./styles";

export type BaseProps = ComponentProps<"div"> & VariantProps<typeof baseStyles>;
