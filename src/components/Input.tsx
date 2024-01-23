import React, { useEffect, useState } from "react";

import { ThemeContext } from "../providers/ThemeProvider";
import { classNames } from "../utils";

import { Asterisk } from "./icons/Asterisk";
import RadioChecked from "./icons/RadioChecked";
import RadioUnchecked from "./icons/RadioUnchecked";

const _uniqueId = (prefix: string) =>
  `${prefix}${Math.random().toString(36).slice(2)}`;

const styles = {
  default: {
    light: "bg-neutral-100 border-[1px] !border-charcoal-50 [color-scheme:light]",
    dark: "bg-charcoal-500 border-[1px] border-neutral-500 [color-scheme:dark]",
  },
  radio: {
    light:
      "bg-charcoal-50 peer-checked:border-primary-dark [&>span]:text-primary-dark",
    dark: "bg-charcoal-500 peer-checked:border-primary-light [&>span]:text-primary-light",
  },
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
  const { theme, variant } = React.useContext(ThemeContext) as {
    theme: "light" | "dark";
    variant: "round" | "solid";
  };
  const [id, setId] = useState("");
  const colors = styles.default[theme];

  useEffect(() => setId(_uniqueId("input-")), []);

  if (inputType === "radio") {
    const colors = styles.radio[theme];

    return (
      <label className="!w-full">
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
            "border-transparent flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm group",
            "peer-checked:[&>svg.radio-unselected]:hidden peer-checked:[&>svg.radio-selected]:block",
            disabled && "!cursor-not-allowed",
            additionalClassName,
            colors,
          )}
        >
          <span className="font-medium text-base">{label}</span>
          <RadioUnchecked className="radio-unselected" />
          <RadioChecked className="radio-selected hidden" />
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
