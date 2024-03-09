import React from "react";
import Image from "next/image";
import {
  IoCallOutline,
  IoChatbubbleEllipsesOutline,
  IoMailOutline,
} from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BsGear } from "react-icons/bs";

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
        <IoChatbubbleEllipsesOutline
          size={30}
          className="text-black mb-10 cursor-pointer"
        />
        <IoCallOutline size={30} className="text-black mb-10 cursor-pointer" />
        <IoMailOutline size={30} className="text-black mb-10 cursor-pointer" />
        <HiOutlineUserGroup
          size={30}
          className="text-black mb-10 cursor-pointer"
        />
        <BsGear size={30} className="text-black cursor-pointer" />
      </div>
      <div>
        <Image
          src="/assets/images/user1.png"
          alt="user_avatar"
          height={40}
          width={40}
          className="rounded-full object-cover h-10 w-10"
          unoptimized
        />
      </div>
    </div>
  );
};

export default SideNav;
