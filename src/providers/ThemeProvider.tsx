import React from "react";

import useDeviceTheme from "../hooks/useDeviceTheme";

export const defaultTheme = {
  theme: "light",
  variant: "round",
};
export const ThemeContext = React.createContext(defaultTheme);

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const deviceTheme = useDeviceTheme();

  const [theme, setTheme] = React.useState({
    theme: props.theme || deviceTheme,
    variant: props.variant || defaultTheme.variant,
  });

  React.useEffect(() => {
    setTheme({
      theme: props.theme || deviceTheme,
      variant: props.variant || defaultTheme.variant,
    });
  }, [props, deviceTheme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: "light" | "dark";
  variant?: "round" | "solid";
}
