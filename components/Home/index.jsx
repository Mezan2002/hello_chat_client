import React from "react";
import SideNav from "@/components/SideNav";
import ProfileCard from "@/components/Home/ProfileCard/ProfileCard";
import MessageZone from "@/components/Home/MessageZone/index";

const MessageHome = () => {
  return (
    <section className="bg-blue-light h-screen">
      <div className="flex items-start flex-1">
        <div className="w-[5%] h-screen">
          <SideNav />
        </div>
        <div className="w-[95%] h-screen">
          <div className="grid grid-cols-12 gap-3 py-3 pr-3 h-screen">
            <div className="col-span-10 bg-blue-softLight rounded-3xl">
              <MessageZone />
            </div>
            <div className="col-span-2 bg-bg-blue-softLight rounded-3xl">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageHome;
