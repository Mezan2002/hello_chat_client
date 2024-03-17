import {
  EditIcon,
  FeedbackOutlineIcon,
  LogoutOutlineIcon,
  SettingOutlineIcon,
} from "@/helpers/ui/CustomSvg";
import CoverImage from "@/helpers/ui/CustomSvg/CoverImage";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";

const UserInfoCard = () => {
  return (
    <Card className="max-w-[400px] h-max relative flex-1">
      <div>
        <CoverImage />
      </div>
      <CardHeader className="">
        <div className="flex flex-1 flex-col mt-10">
          <Avatar
            className="w-36 h-36 text-large"
            radius="full"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h4 className="text-2xl font-semibold mt-3 uppercase">
                Harry Porter
              </h4>
              <p className="text-sm font-medium text-gray-400">
                @mezanur_rahman
              </p>
            </div>
            <div className="flex items-center">
              <div title="Edit Profile" className="p-2 cursor-pointer">
                <EditIcon />
              </div>
              <div title="Settings and Privacy" className="p-2 cursor-pointer">
                <SettingOutlineIcon color="#C9C9C9" />
              </div>
              <div title="Logout" className="p-2 cursor-pointer">
                <LogoutOutlineIcon />
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          quisquam facilis aliquam provident consectetur officiis est dicta
          laborum rerum doloremque animi quibusdam consequuntur dolores vel,
          vitae odit voluptatem expedita maiores.
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Message Requests</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserInfoCard;
