import React, { useEffect, useState } from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

import { Asterisk } from "./icons/Asterisk";

const _uniqueId = (prefix: string) =>
  `${prefix}${Math.random().toString(36).slice(2)}`;

const styles = {
  light: "bg-neutral-100 border-[1px] !border-charcoal-50 [color-scheme:light]",
  dark: "bg-charcoal-500 border-[1px] border-neutral-500 [color-scheme:dark]",
};

const Input = ({
  label,
  placeholder,
  required,
  disabled,
  type: inputType,
  className: additionalClassName,
  ...otherProps
}: InputProps) => {
  const [id, setId] = useState("");
  const { theme, variant } = useTheme();
  const colors = styles[theme];

  useEffect(() => setId(_uniqueId("input-")), []);

  return (
    <div className="!w-full">
      {label && (
        <div className="flex">
          <label htmlFor={id}>{label}</label>
          {required && <Asterisk className="!align-super !mt-[5px] !ml-[5px]" />}
        </div>
      )}
      <input
        type={inputType || "text"}
        placeholder={placeholder}
        className={classNames(
          "py-2 px-4 w-full !outline-none",
          disabled && "cursor-not-allowed",
          variant === "round" && "rounded-md",
          colors,
          additionalClassName,
        )}
        id={id}
        disabled={disabled}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  disabled?: boolean;
  [key: string]: unknown;
}
