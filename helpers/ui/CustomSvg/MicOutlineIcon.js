import React from "react";

const MicOutlineIcon = ({
  size = 20,
  color = "#C9C9C9",
  isStroke = false,
  strokeWidth = 2,
}) => (
  <svg
    fill={color}
    height={size}
    width={size}
    stroke={isStroke ? color : ""}
    strokeWidth={strokeWidth}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    id="fi_9974576"
  >
    <g stroke={isStroke ? color : ""} strokeWidth={strokeWidth} fill={color}>
      <path d="m32 43.8001c3.2 0 6.2-1.2 8.4-3.5 2.2-2.2 3.4-5.1 3.3-8.2v-19.1c0-6.50005-5.3-11.70005-11.7-11.70005-6.5 0-11.7 5.3-11.7 11.70005v19c-.1 6.5 5.2 11.8 11.7 11.8zm-8.3-30.8c0-4.50005 3.7-8.20005 8.2-8.20005s8.2 3.7 8.2 8.20005v19.1c0 2.2-.8 4.2-2.3 5.8-1.6 1.6-3.7 2.5-5.9 2.5-4.5 0-8.2-3.7-8.2-8.2z"></path>
      <path d="m52.7 31.5001c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 9.5-7.7 17.2-17.3 17.2-9.5 0-17.2-7.7-17.2-17.2 0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 10.8 8.3 19.7 18.9 20.6v7.1h-7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h17.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-7v-7.1c10.9-.8 19.3-9.7 19.3-20.6z"></path>
    </g>
  </svg>
);

export default MicOutlineIcon;
