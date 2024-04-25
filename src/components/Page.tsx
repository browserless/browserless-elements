import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

const Page = (props: PageProps) => {
  const { theme } = useTheme();
  const { className: additionalClassName, children, ...otherProps } = props;

  return (
    <div
      className={classNames(
        additionalClassName,
        "brwl-page",
        theme,
        "max-w-[1441px] flex flex-col items-center ml-[250px] p-8 min-w-[calc(100vw-250px)] !min-h-screen !h-fit",
        "lg:ml-[175px] md:!ml-0",
        theme === "light"
          ? "bg-snow-100 text-tar-700 selection:bg-tar-700 selection:text-white"
          : "bg-tar-900 text-white selection:bg-white selection:text-tar-900",
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Page;
export interface PageProps extends Omit<React.HTMLProps<HTMLDivElement>, "size"> {}
