import React from "react";
import Image from "next/image";

const Messages = ({ isReply = false }) => {
  return (
    <div
      className={`flex ${isReply ? "flex-row-reverse" : ""} items-start gap-3`}
    >
      <Image
        src="/assets/images/user1.png"
        alt="user_avatar"
        height={32}
        width={32}
        className="rounded-full object-cover h-8 w-8"
        unoptimized
      />
      <div className="max-w-[70%]">
        <h6 className="text-xs font-bold mb-1">
          Mezanur Rahman <span className="text-gray-400">04:55pm</span>{" "}
        </h6>
        <p
          className={`text-sm font-medium ${
            isReply ? "bg-brand text-white" : "bg-white"
          } rounded-br-3xl rounded-bl-3xl ${
            isReply ? "rounded-tl-3xl" : "rounded-tr-3xl"
          } p-5 mb-1`}
        >
          Hello world...
        </p>
      </div>
    </div>
  );
};

export default Messages;
