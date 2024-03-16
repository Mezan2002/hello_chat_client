import React from "react";
import { Avatar } from "@/helpers/ui";
import { DoubleCheckIcon } from "@/helpers/ui/CustomSvg";
import { getStatus } from "@/helpers/utils/GetStatusColor";

const MessageCard = () => {
  return (
    <div className="flex items-center gap-1.5 flex-1 px-5 py-4 cursor-pointer">
      <div className="w-[15%]">
        <div className="relative z-0">
          <Avatar height="h-12" width="w-12" />
          <div
            className={`h-4 w-4 border-2 border-white rounded-full absolute bottom-0 right-0 
          ${getStatus("online")}`}
          />
        </div>
      </div>
      <div className="flex flex-1 items-start justify-between w-[85%]">
        <div>
          <h5 className="font-medium">Mezanur Rahman</h5>
          <p className="text-sm font-medium text-gray-500">Hello world</p>
        </div>
        <div className="flex flex-col items-end">
          <p>10:30pm</p>
          <DoubleCheckIcon />
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
