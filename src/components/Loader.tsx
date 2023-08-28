import React from "react";

import { classNames } from "../utils";

const Loader = (props: LoaderProps): React.JSX.Element => {
  const { className: additionalClassName } = props;
  return (
    <svg className={classNames("spinner", additionalClassName)} viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  );
};

export default Loader;
export interface LoaderProps extends React.HTMLProps<HTMLDivElement> {
  classname?: string;
  [key: string]: unknown;
}
