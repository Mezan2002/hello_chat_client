import React from "react";
import Image from "next/image";

const Messages = ({ isReply = false, isTyping = false }) => {
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
      {isTyping ? (
        <div
          className={`px-5 py-2 flex items-center ${
            isReply ? "bg-brand" : "bg-regular-light"
          } rounded-br-3xl rounded-bl-3xl ${
            isReply ? "rounded-tl-3xl" : "rounded-tr-3xl"
          } mb-1`}
        >
          <p className="text-white font-bold">
            Mezanur Rahman{" "}
            <span className="text-regular-light font-medium mr-2">
              is typing
            </span>
          </p>
          <Image
            src="/assets/icons/message_typing_loader.gif"
            alt="message typing loader"
            height={25}
            width={25}
            style={{ userSelect: "none" }}
            draggable={false}
          />
        </div>
      ) : (
        <div className="max-w-[70%]">
          <h6 className="text-xs font-bold mb-1">
            Mezanur Rahman <span className="text-regular-mini">04:55pm</span>{" "}
          </h6>
          <p
            className={`text-lg font-medium ${
              isReply
                ? "bg-brand text-white"
                : "bg-white border border-gray-200"
            } rounded-br-3xl rounded-bl-3xl ${
              isReply ? "rounded-tl-3xl" : "rounded-tr-3xl"
            } p-5 mb-1`}
          >
            Hello world...
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
