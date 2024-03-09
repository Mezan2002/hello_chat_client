import Image from "next/image";
import React from "react";
import { BsCameraFill } from "react-icons/bs";
import {
  IoCall,
  IoImages,
  IoInformationCircle,
  IoVideocam,
} from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa6";
import Messages from "@/components/Home/MessageZone/MessageConent/Messages/Messages";
import { HiPlusCircle } from "react-icons/hi2";

const MessageConent = () => {
  return (
    <div className="pt-5 pr-2 pl-5">
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-3 max-w-full">
          <Image
            src="/assets/images/user1.png"
            alt="user_avatar"
            height={48}
            width={48}
            className="rounded-full object-cover h-12 w-12"
            unoptimized
          />
          <div>
            <h5 className="text-lg font-semibold">Mezanur Rahman</h5>
            <p className="text-xs font-medium">Active</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <IoCall size={25} className="cursor-pointer" />
          <IoVideocam size={30} className="cursor-pointer" />
          <IoInformationCircle size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="min-h-[75vh] max-h-[75vh]">
        <Messages />
        <Messages isReply />
        <div className="flex items-center gap-2 mt-5">
          <div className="w-1/2 h-0.5 bg-blue-light" />
          <p className="text-xs font-semibold uppercase">today</p>
          <div className="w-1/2 h-0.5 bg-blue-light" />
        </div>
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
