import React from "react";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import MessageCard from "./MessageCard/MessageCard";

const MessageList = () => {
  return (
    <div className="p-5">
      {/* message list top */}
      <div>
        <button className="p-5 rounded-2xl bg-slate-100 w-full flex items-center gap-6 uppercase text-sm font-semibold">
          <p className="p-0.5 bg-slate-300 rounded-full h-6 w-6 flex items-center justify-center">
            <BsPlus size={30} className="font-semibold" />
          </p>
          create new
        </button>
        <div>
          <div className="flex items-center justify-between mt-5">
            <h3 className="text-xl font-bold">Chats</h3>
            <p className="p-1 cursor-pointer">
              <IoEllipsisHorizontal size={25} />
            </p>
          </div>
          <div className="flex items-center justify-between border py-1.5 pl-4 pr-2.5 rounded-full mt-5">
            <input
              type="text"
              className="w-[90%] focus:outline-none"
              placeholder="Search"
            />
            <FiSearch className="w-[10%] text-gray-300" size={25} />
          </div>
        </div>
      </div>

      {/* message list */}
      <div className="mt-5">
        <MessageCard />
      </div>
    </div>
  );
};

export default MessageList;
