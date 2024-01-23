import React from "react";

import { ThemeContext } from "../providers/ThemeProvider";

const useTheme = () => {
  const { theme, variant } = React.useContext(ThemeContext) as {
    theme: "light" | "dark";
    variant: "round" | "solid";
  };

  return {
    theme,
    variant,
  };
};

export default useTheme;
