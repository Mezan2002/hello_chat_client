import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <Image
          src="/assets/images/user1.png"
          alt="user_avatar"
          height={80}
          width={80}
          className="rounded-full object-cover h-20 w-20"
          unoptimized
        />
        <h4 className="text-2xl font-semibold mt-3 capitalize">
          Mezanur Rahman
        </h4>
        <p className="text-sm font-medium">Dhaka, Bangladesh</p>
      </div>
    </div>
  );
};

export default ProfileCard;
