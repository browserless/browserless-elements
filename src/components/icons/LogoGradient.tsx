import React from "react";

export default function LogoGradient({
  className: additionalClassName,
}: {
  className: string;
}) {
  return (
    <svg
      className={additionalClassName}
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width="1024"
      height="1024"
    >
      <title>favicon</title>
      <defs>
        <linearGradient
          id="g1"
          x1="220.3"
          y1="854.7"
          x2="760.4"
          y2="517.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff3c95" />
          <stop offset="1" stopColor="#ffc550" />
        </linearGradient>
      </defs>
      <path
        id="Path 0"
        style={{ fill: "url(#g1)" }}
        d="m243.9 0c0.3 0.1 26.4 15 115.1 66.5v411.8c0 391.6 0.1 411.7 1.8 411.2 0.9-0.3 69.7-34 304.1-149l0.1-61.8c0-48.9-0.3-61.6-1.3-61.3-0.6 0.2-43.6 20-95.5 44-51.8 24-94.4 43.5-94.7 43.3-0.2-0.1-0.3-128.3 0-569.6l115.5 68 1.1 256.4 191.4 111.4 0.5 243.6-213.1 104.5c-117.2 57.5-213.9 104.6-214.8 104.8-0.9 0.2-26.5-16.3-112.2-73.3l0.1-296.5c0-163.1 0.3-376.9 0.7-475.2 0.3-98.4 0.9-178.8 1.2-178.8z"
      />
    </svg>
  );
}
