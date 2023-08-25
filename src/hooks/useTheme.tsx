import React from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const useTheme = () => {
  const { theme, variant } = React.useContext(ThemeContext) as {
    theme: "light" | "dark";
    variant: "round" | "solid";
  };

  const [usedTheme] = React.useState(theme);
  const [usedVariant] = React.useState(variant);

  return {
    theme: usedTheme,
    variant: usedVariant
  };
}

export default useTheme;