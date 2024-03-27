import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";
const styles = {
  light: "bg-white border border-solid border-snow-200 shadow-heavy",
  dark: "bg-tar-700 !border border-solid border-charcoal-700 shadow-heavy",
};

const Content = (props: ContentProps) => {
  const { children, className: additionalClassName, ...otherProps } = props;
  const { theme } = useTheme();
  const colors = styles[theme];

  return (
    <div
      className={classNames(
        "rounded text-base w-full h-full",
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
