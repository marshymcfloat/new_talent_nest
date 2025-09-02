"use client";

import { usePathname } from "next/navigation";
import { Briefcase, Settings, UserPen } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";
import { useState, useEffect } from "react";

const lists = [
  { label: "profile", icon: <UserPen size={16} />, url: "/profile" },
  { label: "job", icon: <Briefcase size={16} />, url: "/job" },
  { label: "settings", icon: <Settings size={16} />, url: "/settings" },
];

const ProfileListButtonGroup = () => {
  const pathname = usePathname();
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  useEffect(() => {
    setPendingHref(null);
  }, [pathname]);

  return (
    <ul className="flex flex-col space-y-1">
      {lists.map((list) => {
        const isActive = pathname === list.url;
        const isPending = pendingHref === list.url;

        return (
          <Link
            href={list.url}
            key={list.label}
            onClick={() => {
              if (pathname !== list.url) {
                setPendingHref(list.url);
              }
            }}
          >
            <li
              className={clsx(
                "flex items-center gap-4 cursor-pointer rounded-md px-2 py-1.5 text-lg capitalize transition-all duration-150",
                {
                  "bg-purple-100 font-semibold text-purple-800 dark:bg-purple-500/20 dark:text-purple-300":
                    isActive,
                  "animate-pulse bg-purple-500/20": isPending,
                  "hover:bg-purple-500/10 dark:hover:bg-purple-500/10":
                    !isActive && !isPending,
                }
              )}
            >
              {list.icon} {list.label}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default ProfileListButtonGroup;
