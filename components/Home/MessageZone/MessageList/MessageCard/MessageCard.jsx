import React from "react";
import Image from "next/image";

const MessageCard = () => {
  return (
    <div className="flex items-center gap-3 max-w-full px-2 py-4 border-b cursor-pointer">
      <Image
        src="/assets/images/user1.png"
        alt="user_avatar"
        height={40}
        width={40}
        className="rounded-full object-cover h-10 w-10"
        unoptimized
      />
      <div>
        <h5 className="text-sm font-semibold">Mezanur Rahman</h5>
        <p className="text-xs font-medium">Hello world</p>
      </div>
    </div>
  );
};

export default MessageCard;
