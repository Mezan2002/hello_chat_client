import React from "react";

const VideoCallIcon = ({ size = 20, color = "#C9C9C9" }) => (
  <svg
    fill={color}
    height={size}
    width={size}
    id="Layer"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="video"
      d="m22 7.56v8.88a.753.753 0 0 1 -1.224.587l-2.164-1.737a.3.3 0 0 1 -.112-.234v-6.112a.3.3 0 0 1 .112-.234l2.164-1.737a.753.753 0 0 1 1.224.587zm-5 8.44v-8a2.652 2.652 0 0 0 -3-3h-9a2.652 2.652 0 0 0 -3 3v8a2.652 2.652 0 0 0 3 3h9a2.652 2.652 0 0 0 3-3z"
      fill={color}
    />
  </svg>
);

export default VideoCallIcon;
