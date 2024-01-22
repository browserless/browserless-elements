import React, { ChangeEventHandler } from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

const styles = {
  dark: {
    track: "bg-charcoal-400",
    thumb: "bg-gray-200",
  },
  light: {
    track: "bg-charcoal-50",
    thumb: "bg-gray-100",
  },
};

const Toggle = ({
  label,
  checked,
  disabled,
  onToggle,
}: {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onToggle?: ChangeEventHandler<HTMLInputElement>;
}) => {
  const { theme } = useTheme();

  return (
    <label
      className={classNames(
        "flex items-center relative cursor-pointer select-none w-full",
        disabled && "!cursor-not-allowed",
      )}
    >
      <div className="w-full">
        <span className="text-base font-bold mr-3">{label}</span>
      </div>
      <div>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onToggle}
          className={classNames(
            "toggle-cb appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500",
            styles[theme].track,
            theme,
          )}
        />
        <span
          className={classNames(
            "w-7 h-7 right-7 absolute rounded-full transform transition-transform",
            styles[theme].thumb,
          )}
        />
      </div>
    </label>
  );
};

export default Toggle;
