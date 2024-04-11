"use client";

import React from "react";
import ProfileCard from "@/components/Home/ProfileCard";
import MessageZone from "@/components/Home/MessageZone/index";
import ChatComponent from "./TestingSocket/ChatComponent";

const MessageHome = () => {
  return (
    <section className="h-screen">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-10">
          <MessageZone />
        </div>
        <div className="col-span-2 border-l border-gray-300">
          <ProfileCard />
        </div>
        {/* <ChatComponent /> */}
      </div>
    </section>
  );
};

export default MessageHome;
