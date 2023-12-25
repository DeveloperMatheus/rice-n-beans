"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <select onChange={(evt) => setTheme(evt.target.value)}>
      <option value="" hidden defaultChecked>
        {theme}
      </option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}
