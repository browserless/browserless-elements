import React, { useEffect, useState } from 'react';
import useTheme from '../hooks/useTheme';
import { classNames } from '../utils';

const Asterisk = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  const { className: additionalClassName } = props;

  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('ml-1 fill-hot-pink', additionalClassName)}
    >
      <path d="M4.719.086l-.336 3.07 3.101-.867.204 1.508-2.954.219 1.914 2.546-1.39.75-1.375-2.796-1.235 2.796-1.437-.75L3.1 4.017l-2.93-.22.227-1.507 3.055.867-.336-3.07H4.72z"></path>
    </svg>
  );
};

const _uniqueId = (prefix: string) =>
  `${prefix}${Math.random()
    .toString(36)
    .slice(2)}`;

const styles = {
  light: 'bg-neutral-100 border-[1px] border-neutral-200 [color-scheme:light]',
  dark: 'bg-charcoal-500 border-[1px] border-neutral-500 [color-scheme:dark]',
};

const Input = ({
  label,
  placeholder,
  required,
  type: inputType,
  className: additionalClassName,
  ...otherProps
}: InputProps) => {
  const [id, setId] = useState('');
  const { theme, variant } = useTheme();
  const colors = styles[theme];

  useEffect(() => setId(_uniqueId('input-')), []);

  return (
    <div className="!w-full">
      {label && (
        <div className="flex">
          <label htmlFor={id}>{label}</label>
          {required && (
            <Asterisk className="!align-super !mt-[5px] !ml-[5px]" />
          )}
        </div>
      )}
      <input
        type={inputType || 'text'}
        placeholder={placeholder}
        className={classNames(
          'py-2 px-4 w-full !outline-none',
          variant === 'round' && 'rounded-md',
          colors,
          additionalClassName
        )}
        id={id}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  [key: string]: unknown;
}
