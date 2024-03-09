import React from "react";
import MessageContent from "@/components/Home/MessageZone/MessageConent/MessageConent";
import MessageList from "@/components/Home/MessageZone/MessageList/index";

const MessageZone = () => {
  return (
    <div className="grid grid-cols-12 p-3">
      <div className="col-span-3 bg-white rounded-3xl drop-shadow-sm">
        <MessageList />
      </div>
      <div className="col-span-9">
        <MessageContent />
      </div>
    </div>
  );
};

export default MessageZone;
