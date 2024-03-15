import Image from "next/image";
import React from "react";

const Avatar = ({
  type,
  statusOfUser = {
    online: "online",
    busy: "busy",
    away: "away",
    offline: "offline",
  },
  height = "h-10",
  width = "w-10",
  src = "/assets/images/user1.png",
  name = "user_avatar",
}) => {
  const getStatus = (status) => {
    switch (status) {
      case "online":
        return "bg-green";
      case "busy":
        return "bg-red";
      case "away":
        return "bg-orange";
      case "offline":
        return "bg-regular-light";
      default:
        return "";
    }
  };
  if (type === "avatar_with_status") {
    return (
      <div style={{ userSelect: "none" }} className="relative">
        <Image
          src="/assets/images/user1.png"
          alt="user_avatar"
          height={60}
          width={60}
          className={`rounded-full object-cover ${height} ${width}`}
          unoptimized
          draggable="false"
        />
        <div
          className={`h-4 w-4 border-2 border-white z-50 rounded-full absolute bottom-0 right-0 
          ${getStatus(statusOfUser)}`}
        />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={name}
      height={40}
      width={40}
      className={`rounded-full object-cover ${height} ${width}`}
      unoptimized
      draggable="false"
    />
  );
};

export default Avatar;
