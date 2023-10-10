import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

const styles = {
  base: "text-[12pt] border-none my-2 py-2 cursor-pointer hover:rounded-lg ml-3 mr-7 h-8 flex lg:!ml-0 lg:!mr-2 md:mr-7 md:h-8",
  light: {
    default: "hover:bg-[#eaeaea] text-charcoal-500",
    selected: "!text-charcoal-800 !font-bold rounded-lg bg-[#eaeaea]",
    loading: "bg-[#eaeaea]",
  },
  dark: {
    default: "!text-charcoal-100 hover:!bg-charcoal-600 text-charcoal-50",
    selected:
      "!text-white !font-bold rounded-lg !bg-charcoal-600 hover:bg-charcoal-600",
    loading: "bg-charcoal-600",
  },
};

const AsideItem = (props: AsideItemProps) => {
  const {
    loading,
    selected,
    children,
    prefix,
    suffix,
    className: additionalClassName,
    ...otherProps
  } = props;
  const { theme, variant } = useTheme();
  const colors = styles[theme];

  return (
    <div
      data-type="aside-item"
      className={classNames(
        styles.base,
        colors.default,
        loading && colors.loading,
        selected && colors.selected,
        loading && "!cursor-default animate-pulse",
        loading && variant === "round" && "!rounded-lg py-3",
        additionalClassName,
      )}
      {...otherProps}
    >
      {!loading && (
        <div className="w-full flex items-center text-[14pt] ml-2 lg:!pt-[12] md:!text-[14pt]">
          {prefix && <span className="mr-2">{prefix}</span>}
          <span>{children}</span>
          {suffix && <span className="mr-2">{suffix}</span>}
        </div>
      )}
    </div>
  );
};

export default AsideItem;
export interface AsideItemProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "prefix"> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  selected?: boolean;
  loading?: boolean;
}
