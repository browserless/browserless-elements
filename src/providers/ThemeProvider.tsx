import React from "react";

export const defaultTheme = {
  theme: "light",
  variant: "round",
};
export const ThemeContext = React.createContext(defaultTheme);

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [theme] = React.useState({
    theme: props.theme || defaultTheme.theme,
    variant: props.variant || defaultTheme.variant,
  });

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: "light" | "dark";
  variant?: "round" | "solid";
}
