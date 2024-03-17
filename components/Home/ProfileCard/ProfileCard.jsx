import {
  CircleFillDownArrowIcon,
  DeleteOutlineIcon,
  LinkOutlineIcon,
  MicOutlineIcon,
  PdfFileOutlineIcon,
  PhotosGalleryOutlineIcon,
  SearchIcon,
  VideoOutlineIcon,
} from "@/helpers/ui/CustomSvg";
import { Avatar, Badge } from "@nextui-org/react";

const ProfileCard = () => {
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
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </Badge>
        <h4 className="text-2xl font-semibold mt-3 capitalize">Harry Porter</h4>
        <p className="text-sm font-medium text-gray-400">@mezanur_rahman</p>
      </div>
      <hr className="bg-regular-light my-5" />
      <div className="max-h-[75vh] overflow-y-auto no-scrollbar">
        <div className="p-5">
          <h5 className="text-sm font-semibold">Shared files</h5>
          <div>
            <div className="flex items-center justify-between mt-4 mb-2 bg-green-light rounded-2xl p-2">
              <div className="flex items-center">
                <div className="p-3">
                  <PhotosGalleryOutlineIcon color="green" />
                </div>
                <div>
                  <h6 className="font-medium text-sm">Images</h6>
                  <p className="text-xs font-semibold text-gray-400">
                    510 files
                  </p>
                </div>
              </div>
              <CircleFillDownArrowIcon />
            </div>
            <div className="flex items-center justify-between mt-4 mb-2 bg-purple-light rounded-2xl p-2">
              <div className="flex items-center">
                <div className="p-3">
                  <VideoOutlineIcon color="purple" strokeWidth={8} />
                </div>
                <div>
                  <h6 className="font-medium text-sm">Videos</h6>
                  <p className="text-xs font-semibold text-gray-400">
                    12 files
                  </p>
                </div>
              </div>
              <CircleFillDownArrowIcon />
            </div>
            <div className="flex items-center justify-between mt-4 mb-2 bg-yellow-light rounded-2xl p-2">
              <div className="flex items-center">
                <div className="p-3">
                  <MicOutlineIcon color="orange" />
                </div>
                <div>
                  <h6 className="font-medium text-sm">Voice Mails</h6>
                  <p className="text-xs font-semibold text-gray-400">
                    25 files
                  </p>
                </div>
              </div>
              <CircleFillDownArrowIcon />
            </div>
            <div className="flex items-center justify-between mt-4 mb-2 bg-pink-light rounded-2xl p-2">
              <div className="flex items-center">
                <div className="p-3">
                  <PdfFileOutlineIcon color="pink" />
                </div>
                <div>
                  <h6 className="font-medium text-sm">PDF Files</h6>
                  <p className="text-xs font-semibold text-gray-400">
                    125 files
                  </p>
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
              <div className="flex items-center">
                <div className="p-3">
                  <LinkOutlineIcon color="blue" />
                </div>
                <div>
                  <h6 className="font-medium text-sm">Links</h6>
                  <p className="text-xs font-semibold text-gray-400">
                    560 files
                  </p>
                </div>
              </div>
              <CircleFillDownArrowIcon />
            </div>
          </div>
        </div>
        <div className="p-5">
          <h5 className="text-sm font-semibold">More actions</h5>
          <div>
            <div className="flex items-center justify-between mt-4 mb-2 bg-lightGrayShadow rounded-2xl p-2">
              <div className="flex items-center">
                <div className="p-3">
                  <SearchIcon color="gray" />
                </div>
                <div>
                  <h6 className="font-medium text-sm">Search Conversation</h6>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 mb-2 bg-red-light rounded-2xl p-2">
              <div className="flex items-center">
                <div className="p-3">
                  <DeleteOutlineIcon color="red" />
                </div>
                <div>
                  <h6 className="font-medium text-sm">Delete Conversation</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
