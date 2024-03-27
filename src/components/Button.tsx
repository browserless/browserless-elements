import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

import Loader from "./Loader";

const styles = {
  base: "py-2 px-6 flex !text-base text-center font-semibold",
  light: {
    default:
      "bg-white border-snow-300 border-[1px] hover:bg-snow-100 active:bg-snow-300 text-charcoal-900",
    busy: "active:!bg-white hover:!bg-white",
    disabled:
      "!bg-snow-100 hover:!bg-snow-100 active:!bg-snow-100 !text-charcoal-400",
  },
  dark: {
    default:
      "bg-tar-500 hover:bg-tar-550 active:bg-tar-600 border border-neutral-500 text-white",
    busy: "hover:!bg-tar-600 active:!bg-tar-600",
    disabled: "!text-charcoal-100 !bg-tar-450 hover:!bg-tar-450 active:!bg-tar-450",
  },
};

const variantStyles = {
  danger: {
    base: "!bg-red-700 hover:!bg-red-750 active:!bg-red-780 !text-white",
    disabled: "!bg-red-780 hover:!bg-red-780 active:!bg-red-780 !text-white",
  },
  warning: {
    base: "!bg-hot-yellow-500 hover:!bg-hot-yellow-550 active:!bg-hot-yellow-600 !text-charcoal-900",
    disabled:
      "!bg-hot-yellow-600 hover:!bg-hot-yellow-600 active:!bg-hot-yellow-600 !text-charcoal-900",
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
    prefix,
    ...otherProps
  } = props;

  const { theme } = useTheme();
  const colors = styles[theme];

  return (
    <button
      className={classNames(
        styles.base,
        colors.default,
        disabled && colors.disabled,
        "!rounded",
        prefix && "flex gap-1 items-center",
        (disabled || busy) && "cursor-not-allowed",
        !actionType && busy ? colors.disabled : "",
        actionType === "danger" && variantStyles.danger.base,
        actionType === "warning" && variantStyles.warning.base,

        actionType === "danger" &&
          (disabled || busy) &&
          variantStyles.danger.disabled,

        actionType === "warning" &&
          (disabled || busy) &&
          variantStyles.warning.disabled,

        additionalClassName,
      )}
      onClick={disabled || busy ? undefined : onClick}
      {...otherProps}
    >
      {busy && <Loader className="!w-6 !h-6 mr-2" />}
      {prefix ? prefix : null}
      {children}
    </button>
  );
};

export default Button;
export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "prefix"> {
  busy?: boolean;
  prefix?: React.ReactNode;
  actionType?: "danger" | "warning";
  [key: string]: unknown;
}
