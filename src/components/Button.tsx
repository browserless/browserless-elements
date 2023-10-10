import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

import Loader from "./Loader";

const styles = {
  base: "py-2 px-4 flex !text-base text-center",
  light: {
    default:
      "bg-white border-neutral-200 border-[1px] hover:bg-neutral-50 active:bg-neutral-100 text-charcoal-900",
    busy: "active:!bg-white hover:!bg-white",
    disabled: "!bg-neutral-100 hover:!bg-neutral-100 active:!bg-neutral-100",
  },
  dark: {
    default:
      "bg-charcoal-500 hover:bg-charcoal-550 active:bg-charcoal-600 border-none border-[1px] text-white",
    busy: "hover:!bg-charcoal-600 active:!bg-charcoal-600",
    disabled:
      "!text-charcoal-100 !bg-charcoal-500 hover:!bg-charcoal-500 active:!bg-charcoal-500",
  },
};

const Button = (props: ButtonProps) => {
  const {
    className: additionalClassName,
    busy,
    disabled,
    actionType,
    onClick,
    children,
    ...otherProps
  } = props;

  const { theme, variant } = useTheme();
  const colors = styles[theme];

  return (
    <button
      className={classNames(
        styles.base,
        colors.default,
        disabled && colors.disabled,
        variant === "round" && "rounded-md",
        (disabled || busy) && "cursor-not-allowed",
        !actionType && busy ? colors.disabled : "",
        actionType === "danger" &&
          "!bg-red-700 hover:!bg-red-750 active:!bg-red-780 !text-white",
        actionType === "warning" &&
          "!bg-yellow-800 hover:!bg-yellow-850 active:!bg-yellow-880 !text-charcoal-900",

        actionType === "danger" &&
          (disabled || busy) &&
          "!bg-red-780 hover:!bg-red-780 active:!bg-red-780 !text-white",

        actionType === "warning" &&
          (disabled || busy) &&
          "!bg-yellow-880 hover:!bg-yellow-880 active:!bg-yellow-880 !text-charcoal-900",

        additionalClassName,
      )}
      onClick={disabled || busy ? undefined : onClick}
      {...otherProps}
    >
      {busy && <Loader className="!w-6 !h-6 mr-2" />}
      {children}
    </button>
  );
};

export default Button;
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  busy?: boolean;
  actionType?: "danger" | "warning";
  [key: string]: unknown;
}
