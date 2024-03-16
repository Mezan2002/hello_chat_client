import Image from "next/image";
import React from "react";

const Avatar = ({
  type,
  width = "w-10",
  height = "h-10",
  src = "/assets/images/user1.png",
  name = "user_avatar",
}) => {
  return (
    <Image
      src={src}
      alt={name}
      height={40}
      width={40}
      className={`rounded-full z-0 object-cover 
     ${height} ${width}
      `}
      unoptimized
      draggable="false"
    />
  );
};

export default Avatar;
