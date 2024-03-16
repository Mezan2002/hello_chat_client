import MessageCard from "@/components/Home/MessageZone/MessageList/MessageCard/MessageCard";
import {
  EditIcon,
  MessageFilledIcon,
  PinIcon,
  SearchIcon,
} from "@/helpers/ui/CustomSvg";
import { Tooltip } from "@/helpers/ui";
import OnlineUser from "@/components/Home/MessageZone/MessageList/OnlineUser/OnlineUser";

const MessageList = () => {
  return (
    <div>
      {/* message list top */}
      <div className="p-5 sticky top-0 w-full z-20 bg-white">
        <div className="flex items-center justify-between my-4">
          <h3 className="text-2xl font-bold text-brand">Messages</h3>
          <div className="flex items-center gap-1">
            <Tooltip text="Create message">
              <p className="p-1 cursor-pointer">
                <EditIcon />
              </p>
            </Tooltip>
            <Tooltip text="Search">
              <p className="p-1 cursor-pointer">
                <SearchIcon size={26} />
              </p>
            </Tooltip>
          </div>
        </div>
        {/* active now user */}
        <div className="pt-2">
          <div className="flex items-center justify-between">
            <p className="font-medium text-regular-soft">Online now</p>
            <span className="text-xs font-semibold text-regular-mini">
              See all
            </span>
          </div>

          <OnlineUser />
        </div>
      </div>
      <div className="relative overflow-y-auto no-scrollbar h-[75vh]">
        {/* pinned messages */}
        <div>
          <div className="z-10 flex items-center gap-2 px-5 sticky top-0 bg-white w-full">
            <PinIcon />
            <p className="font-medium text-regular-soft">Pinned messages</p>
          </div>
          <div>
            {[0, 1, 2, 3].map((item) => (
              <MessageCard key={item} />
            ))}
          </div>
        </div>

        {/* all message list */}
        <div>
          <div className="z-10 flex items-center gap-2 px-5 sticky top-0 bg-white w-full">
            <MessageFilledIcon />
            <p className="font-medium text-regular-soft">All messages</p>
          </div>
          <div className="mt-5">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <MessageCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
