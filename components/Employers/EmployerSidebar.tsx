"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { House, LogOut, Briefcase, Users, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EmployerSidebar = () => {
  const pathName = usePathname();

  const { data } = useSession();

  const sidebarMenuItems = [
    {
      href: `/${data?.user.id}/dashboard`,
      label: "dashboard",
      icon: <House size={18} />,
    },
    { href: `/${data?.user.id}/jobs`, label: "jobs", icon: <Briefcase /> },
    {
      href: `/${data?.user.id}/applicants`,
      label: "applicants",
      icon: <Users size={18} />,
    },
    {
      href: `/${data?.user.id}/settings`,
      label: "settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <Sidebar className="">
      <SidebarHeader>
        <h1 className="font-semibold text-xl">Innovatech</h1>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {sidebarMenuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                className={`${item.href === pathName ? "bg-purple-400 hover:bg-purple-400/60 font-semibold duration-150 transition-all" : "!hover:bg-red-400"}`}
              >
                <Link href={item.href} className={`flex items-center gap-3 `}>
                  {item.icon}
                  <span className="capitalize">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="ghost"
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-500/10"
        >
          <LogOut size={16} className="mr-2" /> Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default EmployerSidebar;
