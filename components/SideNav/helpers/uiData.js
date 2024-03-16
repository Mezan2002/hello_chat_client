import {
  MailOutlineIcon,
  MessageOutlineIcon,
  PhoneOutlineIcon,
  SettingOutlineIcon,
  UsersOutlineIcon,
} from "@/helpers/ui/CustomSvg";

export const iconsData = [
  {
    id: 1,
    Icon: MessageOutlineIcon,
    title: "Messages",
    path: "/",
  },
  {
    id: 2,
    Icon: PhoneOutlineIcon,
    title: "Calls",
    path: "/calls",
  },
  {
    id: 3,
    Icon: MailOutlineIcon,
    title: "Message Requests",
    path: "/message-requests",
  },
  {
    id: 4,
    Icon: UsersOutlineIcon,
    title: "Groups",
    path: "/groups",
  },
  {
    id: 5,
    Icon: SettingOutlineIcon,
    title: "Settings",
    path: "/settings",
  },
];
