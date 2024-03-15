import React from "react";
import Image from "next/image";
import {
  IoCallOutline,
  IoChatbubbleEllipsesOutline,
  IoMailOutline,
} from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BsGear } from "react-icons/bs";
import { Avatar } from "@/helpers/ui";

const SideNav = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full pb-8">
      <Image
        src="/assets/images/logo.svg"
        alt=""
        width={100}
        height={100}
        className=""
      />
      <div className="-mt-16">
        <p className="p-1.5 rounded-xl bg-brand mb-8 cursor-pointer">
          <IoChatbubbleEllipsesOutline size={25} className="text-white" />
        </p>
        <p className="p-1.5 rounded-xl mb-8 cursor-pointer">
          <IoCallOutline size={25} className="text-black" />
        </p>
        <p className="p-1.5 rounded-xl mb-8 cursor-pointer">
          <IoMailOutline size={25} className="text-black" />
        </p>
        <p className="p-1.5 rounded-xl mb-8 cursor-pointer">
          <HiOutlineUserGroup size={25} className="text-black" />
        </p>
        <p className="p-1.5 rounded-xl cursor-pointer">
          <BsGear size={25} className="text-black" />
        </p>
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default SideNav;
