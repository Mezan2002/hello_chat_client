import Image from "next/image";
import React from "react";

const Avatar = ({
  type,
  size = 10,
  src = "/assets/images/user1.png",
  name = "user_avatar",
}) => {
  return (
    <Image
      src={src}
      alt={name}
      height={40}
      width={40}
      className={`rounded-full object-cover 
      h-${size} w-${size}
      `}
      unoptimized
      draggable="false"
    />
  );
};

export default Avatar;
