import { createContext, useEffect, useState } from "react";

const initialValue = {
  isCollapsed: true,
  toggleDrawercollapse: () => {},
};

const DrawerContext = createContext(initialValue);

const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setCollapse] = useState(true);

  const [isMounted, setMounted] = useState(false);

  const toggleDrawercollapse = () => {
    setCollapse((prevState) => !prevState);
    localStorage.setItem("drawer", JSON.stringify(!isCollapsed));
  };

  function setStateFromLocalStorage() {
    const isOpen = localStorage.getItem("drawer");

    if (!isOpen) return setCollapse(false);

    setCollapse(JSON.parse(isOpen) as boolean);
  }

  useEffect(() => {
    setMounted(true);
  }, [isMounted]);

  useEffect(() => {
    setStateFromLocalStorage();
  }, [isCollapsed]);

  if (!isMounted) return;

  return (
    <DrawerContext.Provider value={{ isCollapsed, toggleDrawercollapse }}>
      {children}
    </DrawerContext.Provider>
  );
};

export { DrawerContext, DrawerProvider };
