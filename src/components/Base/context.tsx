import { createContext, useState } from "react";

const initialValue = {
  isCollapsed: true,
  toggleDrawercollapse: () => {},
};

const DrawerContext = createContext(initialValue);

const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleDrawercollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <DrawerContext.Provider value={{ isCollapsed, toggleDrawercollapse }}>
      {children}
    </DrawerContext.Provider>
  );
};

export { DrawerContext, DrawerProvider };
