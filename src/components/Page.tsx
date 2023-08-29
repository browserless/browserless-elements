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
        "ml-[250px] p-8 min-w-[calc(100vw-250px)] !min-h-screen !h-fit",
        theme === "light"
          ? "bg-[#e5e5e5] text-charcoal-800 selection:bg-charcoal-800 selection:text-[#e5e5e5]"
          : "bg-[#181818] text-white selection:bg-white selection:text-[#181818]",
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Page;
export interface PageProps extends Omit<React.HTMLProps<HTMLDivElement>, "size"> {}
