import React from "react";

import { classNames } from "../utils";

const Heading = (props: HeadingProps) => {
  const { className: additionalClassName, tag = "p", size, children } = props;
  const Tag = tag as any as React.ComponentClass<any>;

  return (
    <Tag
      className={classNames(
        size == "2xl" && "font-bold text-6xl xl:text-5xl md:text-4xl",
        size == "xl" && "font-bold text-5xl xl:text-4xl md:text-3xl",
        size == "lg" && "font-semibold text-3xl xl:text-2xl",
        size == "md" && "font-semibold text-2xl xl:text-xl",
        size == "sm" && "font-medium text-xl xl:text-xl",
        additionalClassName,
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
export interface HeadingProps
  extends Omit<React.HTMLProps<HTMLHeadingElement>, "size"> {
  tag?: string;
  size: "2xl" | "xl" | "lg" | "md" | "sm";
}
