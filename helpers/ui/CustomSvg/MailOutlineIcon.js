import React from "react";

const MailOutlineIcon = ({
  size = 20,
  color = "#ffffff",
  strokeWidth = 0.001,
}) => (
  <svg
    stroke={color}
    strokeWidth={strokeWidth}
    className="icon"
    fill="none"
    height={size}
    width={size}
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20,19.75H4A2.76,2.76,0,0,1,1.25,17V7A2.76,2.76,0,0,1,4,4.25H20A2.76,2.76,0,0,1,22.75,7V17A2.76,2.76,0,0,1,20,19.75ZM4,5.75A1.25,1.25,0,0,0,2.75,7V17A1.25,1.25,0,0,0,4,18.25H20A1.25,1.25,0,0,0,21.25,17V7A1.25,1.25,0,0,0,20,5.75Z"
      strokeWidth={strokeWidth}
      fill={color}
    />
    <path
      d="M12,13.35a3.25,3.25,0,0,1-1.65-.45L1.62,7.71a.76.76,0,0,1-.27-1,.74.74,0,0,1,1-.26l8.74,5.18a1.69,1.69,0,0,0,1.76,0l8.74-5.18a.74.74,0,0,1,1,.26.76.76,0,0,1-.27,1L13.65,12.9A3.25,3.25,0,0,1,12,13.35Z"
      strokeWidth={strokeWidth}
      fill={color}
    />
  </svg>
);

export default MailOutlineIcon;
