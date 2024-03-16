import React from "react";
import SideNav from "@/components/SideNav";
import ProfileCard from "@/components/Home/ProfileCard/ProfileCard";
import MessageZone from "@/components/Home/MessageZone/index";

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
      </div>
    </section>
  );
};

export default MessageHome;
