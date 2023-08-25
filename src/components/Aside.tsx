/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import useTheme from '../hooks/useTheme';
import { classNames } from '../utils';

const styles = {
  light: 'bg-[#fcfcfc]',
  dark: 'bg-[#313131]',
};

const Aside = (props: AsideProps) => {
  const { children, className: additionalClassName, ...otherProps } = props;
  const { theme } = useTheme();
  const colors = styles[theme];

  return (
    <>
      <div
        className={classNames(
          'h-screen w-[250px] fixed z-10 overflow-x-hidden',
          additionalClassName,
          colors
        )}
        {...otherProps}
      >
        <div className="w-full h-full border-none pt-[20%]">
          <div className="w-20 pointer-events-none m-6 mt-0 flex self-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://raw.githubusercontent.com/browserless/chrome/master/assets/browserless_logo_screen_gradient.png"
              height={100}
              width={100}
              className="mb-12"
              alt=""
            />
          </div>
          <div className="ml-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Aside;
export type AsideProps = React.HTMLProps<HTMLDivElement>;
