import React from "react";

const useDeviceTheme = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  React.useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(darkQuery.matches ? "dark" : "light");

    const updateTheme = () => {
      setTheme(darkQuery.matches ? "dark" : "light");
    };

    darkQuery.addEventListener("change", updateTheme);

    return () => {
      darkQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  return theme;
};

export default useDeviceTheme;
