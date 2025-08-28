"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { useRef, useState } from "react";
import { LogOut } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import ProfileListButtonGroup from "./ProfileListButtonGroup";

const AuthButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: session, status } = useSession();

  const dropdownRef = useRef<HTMLDivElement>(null);

  if (status === "loading") {
    return <Skeleton className="w-[30px] h-[30px] rounded-full" />;
  }

  if (status === "authenticated" && session.user) {
    return session.user.image ? (
      <>
        <div className="relative" ref={dropdownRef}>
          <Image
            src={session.user.image}
            width={30}
            height={30}
            alt={
              session.user.name ? `${session.user.name}'s photo` : "User photo"
            }
            className="object-contain rounded-full "
            onClick={() => setIsVisible((prev) => !prev)}
          />
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                exit={{ opacity: 0, scale: 0 }}
                className="bg-gradient-to-tl from-purple-950/80 text-white to-purple-400/60  gap-4 backdrop-blur-[2px] rounded-tr-none  shadow-2xl  z-50 origin-top-right flex flex-col p-4 rounded-4xl lg:min-w-[200px] absolute bottom-[-230px] right-10"
              >
                <h1 className="text-md text-white">
                  Hi, <span className="font-medium">{session.user.name}</span>
                </h1>

                <ProfileListButtonGroup />
                <button
                  onClick={() => signOut()}
                  className="flex gap-2 hover:bg-black/70 duration-150 transition-all py-1  cursor-pointer hover:border-black/70 items-center border-2 border-black bg-black text-white font-medium   rounded-md px-4 w-full"
                >
                  <LogOut size={16} /> log out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    ) : (
      <div className="w-[30px] h-[30px] rounded-full bg-gray-300 flex items-center justify-center text-white">
        {session.user.name?.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <button
      className="flex gap-2 py-1 hover:bg-black/70 duration-150 transition-all   cursor-pointer hover:border-black/70 items-center border-2 border-black bg-black text-white font-medium   rounded-md px-4 w-full"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
};

export default AuthButton;
