"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "~/components/Layout";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  function renderThemeIcon(theme = "dark"): React.ReactNode {
    const mapThemes: Record<string, React.ReactNode> = {
      dark: <Moon size={26} />,
      light: <Sun size={26} />,
    };

    return mapThemes[theme];
  }

  function switchTheme(theme = "dark") {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      aria-label="Toggle theme"
      variant="ghost"
      onClick={() => switchTheme(theme)}
    >
      {renderThemeIcon(theme)}
    </Button>
  );
};
