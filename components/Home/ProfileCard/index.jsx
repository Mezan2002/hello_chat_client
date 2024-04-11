import {
  NotificationOffOutlineIcon,
  NotificationOnOutlineIcon,
} from "@/helpers/ui/CustomSvg";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Badge,
  Button,
} from "@nextui-org/react";
import {
  moreActionsItem,
  privaryAndSupportItem,
  sharedFilesItem,
  sharedLinksItem,
} from "./helpers/uiData";

const ProfileCard = () => {
  const itemClasses = {
    title: "font-medium text-sm",
    subtitle: "text-xs font-semibold text-gray-400",
    trigger: "px-4 py-2 rounded-lg h-14 flex items-center",
    indicator: "text-bold",
    content: "text-small px-2",
  };
  return (
    <div>
      <div className="flex flex-1 flex-col items-center mt-10">
        <Badge
          content=""
          color="success"
          shape="circle"
          placement="bottom-right"
        >
          <Avatar
            className="w-20 h-20 text-large"
            radius="full"
            src="/assets/images/user.jpg"
          />
        </Badge>
        <h4 className="text-2xl font-semibold mt-3 capitalize">Harry Porter</h4>
        <p className="text-sm font-medium text-gray-400">@mezanur_rahman</p>
      </div>
      <hr className="bg-regular-light my-5" />
      <div className="max-h-[75vh] overflow-y-auto no-scrollbar">
        <div className="p-5">
          <h5 className="text-sm font-semibold sticky pb-2 top-0 bg-white w-full">
            Shared files
          </h5>
          <div className="mt-3">
            {sharedFilesItem.map(
              ({ id, Icon, title, subTitle, bgColor, content }) => (
                <Accordion
                  key={id}
                  showDivider={false}
                  className="flex flex-col gap-1 w-full max-w-[300px] px-0 mb-2"
                  itemClasses={{
                    base: `py-1 px-0 w-full rounded-xl ${bgColor}`,
                    ...itemClasses,
                  }}
                >
                  <AccordionItem
                    key={id}
                    aria-label={title}
                    startContent={Icon}
                    subtitle={<p className="flex">{subTitle}</p>}
                    title={title}
                  >
                    {content}
                  </AccordionItem>
                </Accordion>
              )
            )}
          </div>
        </div>
        <div className="p-5">
          <h5 className="text-sm font-semibold pb-2 sticky top-0 bg-white w-full">
            Shared links
          </h5>
          <div className="mt-3">
            {sharedLinksItem.map(
              ({ id, Icon, title, subTitle, bgColor, content }) => (
                <Accordion
                  key={id}
                  showDivider={false}
                  className="flex flex-col gap-1 w-full max-w-[300px] px-0 mb-2"
                  itemClasses={{
                    base: `py-1 px-0 w-full rounded-xl ${bgColor}`,
                    ...itemClasses,
                  }}
                >
                  <AccordionItem
                    key={id}
                    aria-label={title}
                    startContent={Icon}
                    subtitle={<p className="flex">{subTitle}</p>}
                    title={title}
                  >
                    {content}
                  </AccordionItem>
                </Accordion>
              )
            )}
          </div>
        </div>
        <div className="px-5 pb-5">
          <h5 className="text-sm font-semibold pb-2 sticky top-0 bg-white w-full">
            More actions
          </h5>
          <div>
            {moreActionsItem.map(({ id, title, action, Icon }) => (
              <div
                key={id}
                className={`flex items-center cursor-pointer justify-between mt-4 mb-2 rounded-2xl p-2 bg-lightGrayShadow`}
              >
                <div className="flex items-center">
                  <div className="p-3">
                    {action === "turn_off_notifications" ? (
                      <NotificationOffOutlineIcon color="gray" />
                    ) : action === "turn_on_notifications" ? (
                      <NotificationOnOutlineIcon color="gray" />
                    ) : (
                      Icon
                    )}
                  </div>
                  <div>
                    <h6 className="font-medium text-sm capitalize">{title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5">
          <h5 className="text-sm font-semibold pb-2 sticky top-0 bg-white w-full">
            Privacy and Support
          </h5>
          <div>
            {privaryAndSupportItem.map(({ id, title, action, Icon }) => (
              <div
                key={id}
                className={`flex items-center cursor-pointer justify-between mt-4 mb-2 rounded-2xl p-2 bg-lightGrayShadow`}
              >
                <div className="flex items-center">
                  <div className="p-3">{Icon}</div>
                  <div>
                    <h6 className="font-medium text-sm capitalize">{title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
