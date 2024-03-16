import React from "react";

const MailOutlineIcon = ({ size = 20, color = "#ffffff", strokeWidth = 0 }) => (
  <svg
    className="icon"
    stroke={color}
    strokeWidth={strokeWidth}
    fill={color}
    height={size}
    width={size}
    id="Layer_1"
    enable-background="new 0 0 512 512"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeWidth={strokeWidth}
      d="m392 458h-272c-66.168 0-120-53.832-120-120v-164c0-66.168 53.832-120 120-120h272c66.168 0 120 53.832 120 120v164c0 66.168-53.832 120-120 120zm-272-364c-44.112 0-80 35.888-80 80v164c0 44.112 35.888 80 80 80h272c44.112 0 80-35.888 80-80v-164c0-44.112-35.888-80-80-80zm209.286 197.406 98.855-75.512c8.778-6.705 10.458-19.256 3.753-28.034-6.706-8.778-19.256-10.458-28.034-3.753l-98.843 75.503c-28.541 21.769-68.4 21.785-96.96.055l-95.781-74.455c-8.721-6.78-21.287-5.205-28.065 3.516-6.779 8.721-5.205 21.286 3.516 28.065l95.855 74.512c.048.038.097.075.146.112 21.424 16.34 47.094 24.509 72.77 24.509s51.357-8.174 72.788-24.518z"
    />
  </svg>
);

export default MailOutlineIcon;
