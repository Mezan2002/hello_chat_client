import React from "react";

const PinIcon = ({ size = 20, color = "#C9C9C9" }) => (
  <svg
    fill={color}
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
  >
    <path d="M7.535,17.9,1.707,23.707.293,22.293l5.828-5.809Zm6.3,2.765a7.478,7.478,0,0,0,1.942-7.146l-.312-1.276,3.62-3.64.57.571a2.578,2.578,0,0,0,3.293.346,2.5,2.5,0,0,0,.318-3.805L18.344.788A2.581,2.581,0,0,0,15.051.442a2.5,2.5,0,0,0-.319,3.806l.647.646-3.621,3.64L10.49,8.223a7.479,7.479,0,0,0-7.154,1.941l-.353.354,10.5,10.5Z" />
  </svg>
);

export default PinIcon;
