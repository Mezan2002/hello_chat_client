import { Tooltip } from "@/helpers/ui";
import {
  ChatNotificationIcon,
  CircleFillDownArrowIcon,
  LinkOutlineIcon,
  MicOutlineIcon,
  PdfFileOutlineIcon,
  PhotosGalleryOutlineIcon,
  ProfileUserIcon,
  SearchIcon,
  VideoOutlineIcon,
} from "@/helpers/ui/CustomSvg";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div className="flex flex-1 flex-col items-center mt-10">
        <Image
          src="/assets/images/user.jpg"
          alt="user_avatar"
          height={80}
          width={80}
          className="rounded-full object-cover h-20 w-20"
          unoptimized
        />
        <h4 className="text-2xl font-semibold mt-3 capitalize">Harry Porter</h4>
        <p className="text-sm font-medium text-gray-400">@mezanur_rahman</p>
        {/* <div className="flex items-center mt-5 gap-5">
          <Tooltip text="Search">
            <div className="w-10 h-10 p-2 rounded-full bg-gray-200 flex items-center justify-center">
              <SearchIcon color="black" size={25} isStroke strokeWidth={2} />
            </div>
          </Tooltip>
          <Tooltip text="Chat notification">
            <div className="w-10 h-10 p-2 rounded-full bg-gray-200 flex items-center justify-center">
              <ChatNotificationIcon color="black" size={25} />
            </div>
          </Tooltip>

          <Tooltip text="View Profile">
            <div className="w-10 h-10 p-2 rounded-full bg-gray-200 flex items-center justify-center">
              <ProfileUserIcon color="black" size={25} />
            </div>
          </Tooltip>
        </div> */}
      </div>
      <hr className="bg-regular-light my-5" />
      <div className="p-5">
        <h5 className="text-sm font-semibold">Shared files</h5>
        <div>
          <div className="flex items-center justify-between mt-4 mb-2 bg-green-light rounded-2xl p-2">
            <div className="flex items-center gap-4">
              <div className="p-3">
                <PhotosGalleryOutlineIcon color="green" isStroke />
              </div>
              <div>
                <h6 className="font-medium text-sm">Images</h6>
                <p className="text-xs font-semibold text-gray-400">510 files</p>
              </div>
            </div>
            <CircleFillDownArrowIcon />
          </div>
          <div className="flex items-center justify-between mt-4 mb-2 bg-purple-light rounded-2xl p-2">
            <div className="flex items-center gap-4">
              <div className="p-3">
                <VideoOutlineIcon color="purple" isStroke strokeWidth={8} />
              </div>
              <div>
                <h6 className="font-medium text-sm">Videos</h6>
                <p className="text-xs font-semibold text-gray-400">12 files</p>
              </div>
            </div>
            <CircleFillDownArrowIcon />
          </div>
          <div className="flex items-center justify-between mt-4 mb-2 bg-yellow-light rounded-2xl p-2">
            <div className="flex items-center gap-4">
              <div className="p-3">
                <MicOutlineIcon color="orange" isStroke />
              </div>
              <div>
                <h6 className="font-medium text-sm">Voice Mails</h6>
                <p className="text-xs font-semibold text-gray-400">25 files</p>
              </div>
            </div>
            <CircleFillDownArrowIcon />
          </div>
          <div className="flex items-center justify-between mt-4 mb-2 bg-pink-light rounded-2xl p-2">
            <div className="flex items-center gap-4">
              <div className="p-3">
                <PdfFileOutlineIcon color="pink" isStroke />
              </div>
              <div>
                <h6 className="font-medium text-sm">PDF Files</h6>
                <p className="text-xs font-semibold text-gray-400">125 files</p>
              </div>
            </div>
            <CircleFillDownArrowIcon />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h5 className="text-sm font-semibold">Shared links</h5>
        <div>
          <div className="flex items-center justify-between mt-4 mb-2 bg-blue-light rounded-2xl p-2">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-light">
                <LinkOutlineIcon color="blue" isStroke />
              </div>
              <div>
                <h6 className="font-medium text-sm">Links</h6>
                <p className="text-xs font-semibold text-gray-400">560 files</p>
              </div>
            </div>
            <CircleFillDownArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
