import React from "react";
import Messages from "@/components/Home/MessageZone/MessageConent/Messages/Messages";
import {
  AudioCallIcon,
  CameraFillIcon,
  GalleryFillIcon,
  MoreInfoIcon,
  PaperPlaneFillIcon,
  PlusFillIcon,
  VideoCallIcon,
} from "@/helpers/ui/CustomSvg";
import { Avatar } from "@nextui-org/react";

const MessageConent = () => {
  return (
    <div>
      <div className="border-b border-gray-300 mb-5">
        <div className="p-5 flex items-center justify-between">
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
      </div>
      <div className="px-5">
        <div className="min-h-[76vh] max-h-[76vh] py-5">
          <Messages />
          <Messages isReply />
          <div className="flex items-center gap-2 my-5">
            <div className="w-1/2 h-[1px] bg-regular-soft" />
            <p className="text-xs font-semibold uppercase">today</p>
            <div className="w-1/2 h-[1px] bg-regular-soft" />
          </div>
          <Messages isReply isTyping />
        </div>

        <div className="bg-white rounded-2xl w-full p-5 mt-5 flex flex-1 items-center">
          <div className="flex flex-1 items-center gap-3 w-[95%]">
            <PlusFillIcon color="#4621ff" size={28} />
            <CameraFillIcon color="#4621ff" size={30} />
            <GalleryFillIcon color="#4621ff" size={30} />
            <input
              type="text"
              className="focus:outline-none w-[93%]"
              placeholder="Type your message here"
            />{" "}
          </div>
          <div className="w-[5%] flex justify-end">
            <p className="flex items-center justify-center bg-purple-light rounded-full h-10 w-10 relative cursor-pointer">
              <PaperPlaneFillIcon color="#4621ff" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageConent;
