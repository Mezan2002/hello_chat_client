import React from "react";

const PdfFileOutlineIcon = ({
  size = 20,
  color = "#C9C9C9",
  isStroke = false,
  strokeWidth = 1.1,
}) => (
  <svg
    fill={color}
    height={size}
    width={size}
    stroke={isStroke ? color : ""}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill={color}>
      <path
        strokeWidth={strokeWidth}
        d="m15 12.9502h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75z"
      />
      <path
        strokeWidth={strokeWidth}
        d="m12.38 16.9502h-4.38c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.38c.41 0 .75.34.75.75s-.34.75-.75.75z"
      />
      <path
        strokeWidth={strokeWidth}
        d="m14 6.75h-4c-.96 0-2.75 0-2.75-2.75s1.79-2.75 2.75-2.75h4c.96 0 2.75 0 2.75 2.75 0 .96 0 2.75-2.75 2.75zm-4-4c-.99 0-1.25 0-1.25 1.25s.26 1.25 1.25 1.25h4c1.25 0 1.25-.26 1.25-1.25 0-1.25-.26-1.25-1.25-1.25z"
      />
      <path
        strokeWidth={strokeWidth}
        d="m15 22.7499h-6c-5.62 0-6.75-2.58-6.75-6.75v-5.99997c0-4.56 1.65-6.51 5.71-6.72.4-.02.77.29.79.71s-.3.76-.71.78c-2.84.16-4.29 1.01-4.29 5.23v5.99997c0 3.7.73 5.25 5.25 5.25h6c4.52 0 5.25-1.55 5.25-5.25v-5.99997c0-4.22-1.45-5.07-4.29-5.23-.41-.02-.73-.38-.71-.79s.38-.73.79-.71c4.06.22 5.71 2.17 5.71 6.72v5.99997c0 4.18-1.13 6.76-6.75 6.76z"
      />
    </g>
  </svg>
);

export default PdfFileOutlineIcon;
