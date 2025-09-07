import Navbar from "@/components/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const JobSeekerLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      {modal}
      {children}
    </main>
  );
};

export default JobSeekerLayout;
