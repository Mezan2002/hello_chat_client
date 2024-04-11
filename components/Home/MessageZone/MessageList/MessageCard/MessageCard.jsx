import React from "react";
import { DoubleCheckIcon } from "@/helpers/ui/CustomSvg";
import { Avatar, Badge } from "@nextui-org/react";

const MessageCard = () => {
  return (
    <div className="flex items-center gap-1.5 flex-1 px-5 py-4 cursor-pointer">
      <div className="w-[15%]">
        <div className="z-0">
          <Badge
            content=""
            color="success"
            shape="circle"
            placement="bottom-right"
          >
            <Avatar
              radius="full"
              className="w-12 h-12"
              src="/assets/images/user.jpg"
            />
          </Badge>
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
