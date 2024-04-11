"use client";

import React from "react";
import Image from "next/image";
import { iconsData } from "./helpers/uiData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@nextui-org/react";
import UserInfoCard from "./UserInfoCard";

const SideNav = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col items-center justify-between h-full pb-8">
      <Image
        src="/assets/images/logo.svg"
        alt=""
        width={100}
        height={100}
        className=""
      />
      <div className="-mt-8 flex flex-col items-center justify-between h-[40vh]">
        {iconsData.map(({ id, title, Icon, path }) => {
          const isActive = pathName === path;
          return (
            <Link key={id} href={path}>
              <Tooltip placement="right" content={title}>
                <div
                  className={`p-2 rounded-xl ${
                    isActive ? "bg-brand" : "text-black"
                  } cursor-pointer icon-container items-center justify-center`}
                >
                  {<Icon color={isActive ? "white" : "black"} />}
                </div>
              </Tooltip>
            </Link>
          );
        })}
      </div>
      <div className="cursor-pointer">
        <Popover showArrow placement="right-end">
          <PopoverTrigger>
            <Avatar radius="full" src="/assets/images/user.jpg" />
          </PopoverTrigger>
          <PopoverContent className="p-1">
            <UserInfoCard />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SideNav;
