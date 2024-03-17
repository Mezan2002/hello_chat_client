import Image from "next/image";
import React from "react";
import { BsCameraFill } from "react-icons/bs";
import { IoImages } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa6";
import Messages from "@/components/Home/MessageZone/MessageConent/Messages/Messages";
import { HiPlusCircle } from "react-icons/hi2";
import {
  AudioCallIcon,
  MoreInfoIcon,
  VideoCallIcon,
} from "@/helpers/ui/CustomSvg";
import { Avatar, Tooltip } from "@nextui-org/react";

const MessageConent = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-3 max-w-full">
          <Avatar src="/assets/images/user1.png" className="w-12 h-12" />
          <div>
            <h5 className="text-lg font-semibold">Mezanur Rahman</h5>
            <div className="flex items-center flex-1 gap-1">
              <div className="h-2 w-2 bg-green rounded-full" />
              <p className="text-xs font-semibold">Active</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <AudioCallIcon />
          <VideoCallIcon size={28} />
          <MoreInfoIcon />
        </div>
      </div>
      <div className="min-h-[78vh] max-h-[78vh]">
        <Messages />
        <Messages isReply />
        <div className="flex items-center gap-2 my-5">
          <div className="w-1/2 h-[1px] bg-regular-soft" />
          <p className="text-xs font-semibold uppercase">today</p>
          <div className="w-1/2 h-[1px] bg-regular-soft" />
        </div>
        <Messages isReply isTyping />
      </div>

      <div className="bg-white rounded-2xl w-full py-4 px-5 mt-5 flex flex-1 items-center">
        <div className="flex flex-1 items-center gap-3 w-[95%]">
          <HiPlusCircle size={30} className="cursor-pointer" />
          <BsCameraFill size={30} className="cursor-pointer" />
          <IoImages size={30} className="cursor-pointer" />
          <input
            type="text"
            className="focus:outline-none w-[93%]"
            placeholder="Type your message here"
          />{" "}
        </div>
        <div className="w-[5%] flex justify-end">
          <p className="p-0.5 bg-slate-100 rounded-full h-10 w-10 relative cursor-pointer">
            <FaPaperPlane
              size={15}
              className="font-semibold absolute top-3 left-3"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageConent;
