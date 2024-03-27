import React from "react";

import useTheme from "../../hooks/useTheme";
import { classNames } from "../../utils";

export const Asterisk = (props: React.ComponentPropsWithoutRef<"svg">) => {
  const { className: additionalClassName } = props;
  const { theme } = useTheme();

  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        "ml-1",
        theme === "dark" ? "fill-hot-yellow-500" : "fill-hot-pink-500",
        additionalClassName,
      )}
    >
      <path d="M4.719.086l-.336 3.07 3.101-.867.204 1.508-2.954.219 1.914 2.546-1.39.75-1.375-2.796-1.235 2.796-1.437-.75L3.1 4.017l-2.93-.22.227-1.507 3.055.867-.336-3.07H4.72z"></path>
    </svg>
  );
};
