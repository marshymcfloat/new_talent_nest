"use client";

import { Briefcase, Settings, UserPen } from "lucide-react";
import Link from "next/link";

const lists = [
  { label: "profile", icon: <UserPen size={16} />, url: "/profile" },
  { label: "job", icon: <Briefcase size={16} />, url: "/job" },
  { label: "settings", icon: <Settings size={16} />, url: "/settings" },
];

const ProfileListButtonGroup = () => {
  return (
    <ul className="flex flex-col ">
      {lists.map((list) => (
        <Link href={"/profile"} key={list.label}>
          <li className=" items-center flex gap-4 cursor-pointer hover:bg-purple-100/20 transition-all duration-150 px-2 rounded-md text-lg capitalize">
            {list.icon} {list.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ProfileListButtonGroup;
