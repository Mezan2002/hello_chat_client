import React from "react";
import MessageContent from "@/components/Home/MessageZone/MessageConent/MessageConent";
import MessageList from "@/components/Home/MessageZone/MessageList/index";

const MessageZone = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 border-r border-gray-300">
        <MessageList />
      </div>
      <div className="col-span-9 bg-lightGrayShadow">
        <MessageContent />
      </div>
    </div>
  );
};

export default MessageZone;
