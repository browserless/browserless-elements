/* eslint-disable react/no-unescaped-entities */
import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

import Button from "./Button";
import BackArrowIcon from "./icons/BackArrow";
import MenuIcon from "./icons/Menu";

const styles = {
  light:
    "bg-snow-50 selection:bg-tar-700 selection:text-snow-50 border-r border-solid border-snow-200",
  dark: "bg-tar-700 selection:bg-snow-50 selection:text-tar-700 border-r border-solid border-charcoal-600",
};

const Aside = (props: AsideProps) => {
  const { children, className: additionalClassName, ...otherProps } = props;
  const [isActive, setActive] = React.useState(false);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const colors = styles[theme];

  const Icon = isActive ? BackArrowIcon : MenuIcon;
  const handler = () => {
    console.log("Setting active to false");
    setActive(false);
  };

  React.useEffect(() => {
    if (mobileMenuRef.current) {
      const $$items = Array.from(
        mobileMenuRef.current.querySelectorAll("div[data-type=aside-item]"),
      );

      for (const $item of $$items) {
        if (isActive) $item.addEventListener("click", handler);
        else $item.removeEventListener("click", handler);
      }
    }
  }, [isActive]);

  return (
    <div ref={mobileMenuRef}>
      <div
        className={classNames(
          "flex justify-start mt-5 ml-5 fixed z-[60]",
          "md:!block hidden",
        )}
      >
        <Button onClick={() => setActive(!isActive)}>
          <Icon className="!w-5 !h-6" />
        </Button>
      </div>
      <div className={classNames(isActive ? "md:!block" : "md:!hidden", "block")}>
        <div
          className={classNames(
            "h-screen w-screen bg-black/30 md:!ml-0 md:block absolute hidden",
            isActive ? "block" : "hidden",
          )}
          onClick={() => setActive(false)}
        />
        <div
          className={classNames(
            "h-screen w-[250px] fixed z-10 overflow-x-hidden shadow-heavy",
            "lg:w-[175px] md:!w-[250px] md:z-50 md:pt-5",
            additionalClassName,
            colors,
          )}
          {...otherProps}
        >
          <div className="w-full h-full border-none pt-[20%]">
            <div className="w-20 pointer-events-none flex self-center !my-0 !mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.browserless.io/icons/icon-192x192.png"
                height={100}
                width={100}
                className="mb-12"
                alt=""
              />
            </div>
            <div className="ml-4 lg:ml-2">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
export type AsideProps = React.HTMLProps<HTMLDivElement>;
