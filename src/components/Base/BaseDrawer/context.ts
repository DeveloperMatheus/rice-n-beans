import { createContext } from "react";
import { BaseDrawerContext } from "./types";

export const DrawerContext = createContext<BaseDrawerContext>({
  isDrawerOpen: false,
  setIsDrawerOpen: () => undefined,
});
