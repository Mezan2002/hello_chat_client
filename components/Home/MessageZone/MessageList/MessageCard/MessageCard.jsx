import React from "react";
import Image from "next/image";
import { Avatar } from "@/helpers/ui";
import { DoubleCheckIcon } from "@/helpers/ui/CustomSvg";

const MessageCard = () => {
  return (
    <div className="flex items-center gap-3 flex-1 px-5 py-4 cursor-pointer">
      <div className="w-[15%]">
        <Avatar height="h-12" width="w-12" />
      </div>
      <div className="flex flex-1 items-start justify-between w-[85%]">
        <div>
          <h5 className="text-base font-bold">Mezanur Rahman</h5>
          <p className="text-sm font-medium text-regular-soft">Hello world</p>
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
