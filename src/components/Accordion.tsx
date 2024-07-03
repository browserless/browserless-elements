import React from "react";

import { classNames } from "../utils";

import { Chevron } from "./Select";

export interface AccordionProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "label"> {
  label: React.ReactNode;
}

const Accordion = (props: AccordionProps) => {
  const { label, children, className: additionalClassName } = props;
  const dataId = React.useId();

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const calculatedParentHeigh = document.querySelector(
      `[data-identifier="${dataId}"]`,
    )!.scrollHeight;
    const calculatedHeigh = document.querySelector(
      `[data-identifier="${dataId}"] div[data-children]`,
    )!.scrollHeight;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
    [data-identifier="${dataId}"][open] {
      height: calc(50px + ${calculatedHeigh}px) !important;
    }
    [data-identifier="${dataId}"]:not([open]) {
      height: ${calculatedParentHeigh}px !important;
    }
    [data-identifier="${dataId}"] [data-chevron] {
      transition-property: transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    [data-identifier="${dataId}"][open] [data-chevron] {
      transform: rotate(180deg);
    }

    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [dataId, children]);

  return (
    <>
      <details
        className={classNames("brwl-details", additionalClassName)}
        data-identifier={dataId}
      >
        <summary className="font-semibold !text-lg">
          <div className="flex items-center gap-2">
            {label} <Chevron data-chevron />
          </div>
        </summary>
        <div data-children>{children}</div>
      </details>
    </>
  );
};

export default Accordion;
