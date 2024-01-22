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
  description,
  type: inputType,
  className: additionalClassName,
  ...otherProps
}: InputProps) => {
  const [id, setId] = useState("");
  const { theme, variant } = useTheme();
  const colors = styles[theme];

  useEffect(() => setId(_uniqueId("input-")), []);

  if (inputType === "radio") {
    return (
      <label>
        <input
          type="radio"
          value="1"
          className="peer
          hidden"
          name="framework"
          disabled={disabled}
          {...otherProps}
        />

        <div
          className={classNames(
            "bg-charcoal-500 border-transparent flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm group",
            "peer-checked:border-primary-light peer-checked:[&>svg.radio-unselected]:hidden peer-checked:[&>svg.radio-selected]:block",
            disabled && "!cursor-not-allowed",
            additionalClassName,
          )}
        >
          <span className="font-medium text-primary-light text-base">{label}</span>
          <svg
            className="radio-unselected"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1.4em"
            width="1.4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"></path>
          </svg>

          <svg
            className="radio-selected hidden"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1.4em"
            width="1.4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z"></path>
          </svg>
        </div>
      </label>
    );
  }

  return (
    <div className="!w-full">
      {label && (
        <div className="flex">
          <label htmlFor={id}>{label}</label>
          {required && <Asterisk className="!align-super !mt-[5px] !ml-[5px]" />}
        </div>
      )}
      {description && (
        <label className="text-sm text-charcoal-200" htmlFor={id}>
          {description}
        </label>
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
  description?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  [key: string]: unknown;
}
