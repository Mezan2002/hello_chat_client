import {
  BlockUserIcon,
  CircleFillDownArrowIcon,
  CreateGroupIcon,
  DeleteOutlineIcon,
  HelpOutlineIcon,
  LinkOutlineIcon,
  MicOutlineIcon,
  NotificationOffOutlineIcon,
  PdfFileOutlineIcon,
  PhotosGalleryOutlineIcon,
  ReportUserOutlineIcon,
  SearchIcon,
  VideoOutlineIcon,
} from "@/helpers/ui/CustomSvg";

export const sharedFilesItem = [
  {
    id: 1,
    Icon: <PhotosGalleryOutlineIcon color="green" />,
    bgColor: "bg-green-light",
    title: "Images",
    subTitle: "510 files",
    content: "Hello Photos",
  },
  {
    id: 2,
    Icon: <VideoOutlineIcon color="purple" />,
    bgColor: "bg-purple-light",
    title: "Videos",
    subTitle: "25 files",
    content: "Hello Videos",
  },
  {
    id: 3,
    Icon: <MicOutlineIcon color="orange" />,
    bgColor: "bg-orange-light",
    title: "Voice Mails",
    subTitle: "210 files",
    content: "Hello Voice Mail",
  },
  {
    id: 4,
    Icon: <PdfFileOutlineIcon color="pink" />,
    bgColor: "bg-pink-light",
    title: "PDF Files",
    subTitle: "50 files",
    content: "Hello PDF",
  },
];

export const sharedLinksItem = [
  {
    id: 1,
    Icon: <LinkOutlineIcon color="blue" />,
    bgColor: "bg-blue-light",
    title: "Links",
    subTitle: "100 files",
    content: "Hello Links",
  },
];

export const moreActionsItem = [
  {
    id: 1,
    Icon: <SearchIcon color="gray" />,
    title: "Search in Conversation",
    action: "search",
  },
  {
    id: 2,
    Icon: <NotificationOffOutlineIcon color="gray" />,
    title: "Turn off notifications",
    action: "turn_off_notifications",
  },
  {
    id: 3,
    Icon: <CreateGroupIcon color="gray" />,
    title: "Create a group with Mezanur",
    action: "delete",
  },
  {
    id: 3,
    Icon: <DeleteOutlineIcon color="gray" />,
    title: "Delete Conversation",
    action: "delete",
  },
];

export const privaryAndSupportItem = [
  {
    id: 1,
    Icon: <BlockUserIcon color="gray" />,
    title: "Block user",
    action: "block_user",
  },
  {
    id: 2,
    Icon: <ReportUserOutlineIcon color="gray" />,
    title: "Report user",
    action: "report_user",
  },
  {
    id: 3,
    Icon: <HelpOutlineIcon color="gray" />,
    title: "Help and Suppor",
    action: "help_and_support",
  },
];
