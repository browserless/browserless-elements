import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

const Page = (props: PageProps) => {
  const { theme } = useTheme();
  const { className: additionalClassName, children, ...otherProps } = props;

  return (
    <a
      className={classNames(
        "no-underline",
        theme === "light" ? "text-hot-pink-500" : "text-hot-yellow-500",
        additionalClassName,
      )}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default Page;
export interface PageProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, "children"> {
  children?: React.ReactNode;
}
