import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";
const styles = {
  light: "bg-primary-light",
  dark: "bg-primary-dark",
};

const Content = (props: ContentProps) => {
  const { children, className: additionalClassName, ...otherProps } = props;
  const { theme } = useTheme();
  const colors = styles[theme];

  return (
    <div
      className={classNames(
        "rounded-md text-base w-full h-full",
        colors,
        additionalClassName,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Content;
export interface ContentProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}
