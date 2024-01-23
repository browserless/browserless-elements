import React from "react";

export default function RadioUnchecked({
  className: additionalClassName,
}: {
  className: string;
}) {
  return (
    <svg
      className={additionalClassName}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1.4em"
      width="1.4em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"></path>
    </svg>
  );
}