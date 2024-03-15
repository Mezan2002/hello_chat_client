"use client";

import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  let timeoutId;

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowTooltip(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <div className="tooltip-text">{text}</div>}
    </div>
  );
};

export default Tooltip;
