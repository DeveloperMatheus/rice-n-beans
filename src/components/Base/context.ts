import { createContext } from "react";
import { BaseDrawerContext } from "./BaseDrawer/types";

export const DrawerContext = createContext<BaseDrawerContext>({
  isDrawerOpen: false,
  setIsDrawerOpen: () => undefined,
});
