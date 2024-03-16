"use client";

import React, { useState } from "react";

const Tooltip = ({
  text = "give me a icon text",
  children,
  containerClassName = "",
  textClassName = "",
}) => {
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
      className={`tooltip-container cursor-pointer ${containerClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className={`tooltip-text ${textClassName} font-medium capitalize`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
