import MessageCard from "@/components/Home/MessageZone/MessageList/MessageCard/MessageCard";
import { EditIcon, PinIcon, SearchIcon } from "@/helpers/ui/CustomSvg";
import { Avatar, HorizontalScrollContainer, Tooltip } from "@/helpers/ui";

const MessageList = () => {
  return (
    <div>
      {/* message list top */}
      <div className="p-5">
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
        <div className="pt-2 pb-5">
          <div className="flex items-center justify-between">
            <p className="font-medium text-regular-soft">Online now</p>
            <span className="text-xs font-semibold text-regular-mini">
              See all
            </span>
          </div>

          <HorizontalScrollContainer>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div key={item} className="flex-shrink-0 cursor-pointer">
                <Avatar
                  height="h-14"
                  width="w-14"
                  type="avatar_with_status"
                  statusOfUser="online"
                />
              </div>
            ))}
          </HorizontalScrollContainer>
        </div>
        {/* pinned messages */}
        <div className="flex items-center gap-2">
          <PinIcon />
          <p className="font-medium text-regular-soft">Pinned messages</p>
        </div>
      </div>

      {/* message list */}
      <div className="mt-5 max-h-[70vh] overflow-y-auto no-scrollbar">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <MessageCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
