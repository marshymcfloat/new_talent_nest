"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { useRef, useState } from "react";
import { LogOut, User as UserIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { useOnClickOutside } from "@/app/hooks/UseOnClickOutside";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AuthButtonProps {
  signOutRedirectUrl?: string;
}

const AuthButton = ({ signOutRedirectUrl = "/" }: AuthButtonProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { data: session, status } = useSession();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setDropdownVisible(false));

  if (status === "loading") {
    return <Skeleton className="w-8 h-8 rounded-full" />;
  }

  if (status === "authenticated" && session.user) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownVisible((prev) => !prev)}
          className="rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Open user menu"
        >
          {session.user.image ? (
            <Image
              src={session.user.image}
              width={32}
              height={32}
              alt={
                session.user.name
                  ? `${session.user.name}'s photo`
                  : "User photo"
              }
              className="object-cover rounded-full size-10 border-2 border-purple-400 p-1 "
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
              {session.user.name?.charAt(0).toUpperCase()}
            </div>
          )}
        </button>

        <AnimatePresence>
          {isDropdownVisible && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={cn(
                "absolute top-full mt-2 right-0 z-50 min-w-[220px] origin-top-right",
                "bg-popover text-popover-foreground rounded-lg border shadow-lg",
                "p-2"
              )}
            >
              <div className="p-2 border-b">
                <p className="text-sm font-semibold text-foreground">
                  {session.user.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {session.user.email}
                </p>
              </div>
              <ul className="py-2">
                <li>
                  <Link
                    href="/profile"
                    onClick={() => setDropdownVisible(false)}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent"
                  >
                    <UserIcon size={16} /> My Profile
                  </Link>
                </li>
              </ul>
              <div className="p-2 border-t">
                <Button
                  variant="ghost"
                  onClick={() => signOut({ callbackUrl: signOutRedirectUrl })}
                  className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-500/10"
                >
                  <LogOut size={16} className="mr-2" /> Sign Out
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Button
      onClick={() => signIn()}
      className="bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
    >
      Sign In
    </Button>
  );
};

export default AuthButton;
