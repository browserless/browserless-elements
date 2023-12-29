import React from "react";

import useOuterClick from "../hooks/useOuterClick";
import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

import { Asterisk } from "./icons/Asterisk";

const Chevron = ({ className: additionalClassName }: { className?: string }) => {
  return (
    <svg
      className={additionalClassName}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
    </svg>
  );
};

const styles = {
  light: {
    button: "bg-neutral-100 border-charcoal-50",
    ul: "bg-neutral-100 ring-charcoal-50 mt-1",
    li: "hover:bg-charcoal-50",
    disabled: "text-charcoal-300",
  },
  dark: {
    button: "bg-charcoal-500 border-neutral-500",
    ul: "bg-charcoal-500 ring-neutral-500 mt-1",
    li: "hover:bg-charcoal-650",
    disabled: "text-charcoal-200",
  },
};

export default function Select(props: SelectProps) {
  const {
    values,
    label,
    required,
    onChange,
    value,
    disabled,
    className: additionalClassName,
    ...otherProps
  } = props;
  const { theme } = useTheme();
  const [isActive, setActive] = React.useState(false);
  const [selected, setSelected] = React.useState(
    values.find((val) => val.value === value)?.text || values[0].text,
  );
  const innerRef = useOuterClick<HTMLButtonElement>(() => setActive(false));
  const id = React.useId();

  React.useEffect(() => {
    setSelected(values.find((val) => val.value === value)?.text);
  }, [value, values]);

  const colors = styles[theme];

  return (
    <div x-data="select" className="relative w-full">
      {label && (
        <div className="flex">
          <label htmlFor={id}>{label}</label>
          {required && <Asterisk className="!align-super !mt-[5px] !ml-[5px]" />}
        </div>
      )}
      <div className={additionalClassName} {...otherProps}>
        <button
          className={classNames(
            "flex p-2 w-full items-center justify-between rounded border-[1px]",
            disabled && "cursor-not-allowed",
            disabled && colors.disabled,
            colors.button,
          )}
          onClick={() => {
            if (disabled) return;
            return setActive(!isActive);
          }}
          ref={innerRef}
        >
          <span>{selected}</span>

          <Chevron className={classNames(isActive && "rotate-180")} />
        </button>
      </div>

      <ul
        className={classNames(
          "z-20 absolute w-full rounded ring-1 max-h-[40vh] overflow-y-scroll",
          isActive ? "block" : "hidden",
          colors.ul,
        )}
      >
        {values.map((v, i) => (
          <li
            key={i}
            className={classNames("cursor-pointer p-2", colors.li)}
            onClick={() => {
              setSelected(v.text);
              onChange && onChange(v.value);
            }}
          >
            {v.text || v.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface SelectProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "onChange"> {
  values: {
    value: any;
    text?: string;
  }[];
  value?: any;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (selected: any) => void;
  [key: string]: unknown;
}
