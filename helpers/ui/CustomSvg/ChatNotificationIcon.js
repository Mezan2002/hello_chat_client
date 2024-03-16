import React from "react";

const ChatNotificationIcon = ({
  size = 20,
  color = "#C9C9C9",
  isStroke = false,
  strokeWidth = 1,
}) => (
  <svg
    fill={color}
    height={size}
    width={size}
    stroke={isStroke ? color : ""}
    strokeWidth={strokeWidth}
    id="Layer"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="chat-text-notification">
      <path
        d="m19.931 8.369a3.327 3.327 0 0 1 -1.1.126 3.538 3.538 0 0 1 -3.331-3.325 3.336 3.336 0 0 1 .126-1.1.3.3 0 0 0 -.16-.37 8.985 8.985 0 0 0 -11.633 12.057 1.933 1.933 0 0 1 .06 1.42l-.84 2.5a1 1 0 0 0 1.27 1.27l2.5-.84a1.933 1.933 0 0 1 1.42.06 8.986 8.986 0 0 0 12.057-11.638.3.3 0 0 0 -.369-.16zm-6.931 6.381h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5zm3-4h-8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 0 1.5zm1-5.75a2 2 0 1 1 2 2 2 2 0 0 1 -2-2z"
        fill={color}
      />
    </g>
  </svg>
);

export default ChatNotificationIcon;
