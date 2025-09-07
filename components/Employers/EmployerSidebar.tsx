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
import { signOut } from "next-auth/react";
import Link from "next/link";

const EmployerSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="font-semibold text-xl">Innovatech</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/employer" className="flex items-center gap-3">
                <House size={18} />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/employer/jobs" className="flex items-center gap-3">
                <Briefcase size={18} />
                <span>Jobs</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/employer/candidates"
                className="flex items-center gap-3"
              >
                <Users size={18} />
                <span>Candidates</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/employer/settings"
                className="flex items-center gap-3"
              >
                <Settings size={18} />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
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
