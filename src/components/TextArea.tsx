import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

import { Asterisk } from "./icons/Asterisk";

const styles = {
  light: "bg-neutral-100 border-[1px] border-neutral-200 [color-scheme:light]",
  dark: "bg-charcoal-500 border-[1px] border-neutral-500 [color-scheme:dark]",
};

const TextArea = ({
  label,
  placeholder,
  required,
  className: additionalClassName,
  ...otherProps
}: {
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  [key: string]: unknown;
}) => {
  const { theme, variant } = useTheme();
  const colors = styles[theme];
  const id = React.useId();

  return (
    <div className="!w-full">
      {label && (
        <div className="flex">
          <label htmlFor={id}>{label}</label>
          {required && <Asterisk className="!align-super !mt-[5px] !ml-[5px]" />}
        </div>
      )}

      <textarea
        placeholder={placeholder}
        className={classNames(
          "py-2 px-4 w-full !outline-none",
          variant === "round" && "rounded-md",
          colors,
          additionalClassName,
        )}
        id={id}
        {...otherProps}
      />
    </div>
  );
};

export default TextArea;
