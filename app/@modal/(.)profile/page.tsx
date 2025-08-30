"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CareerHistory, User } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import CareerCard from "@/components/CareerCard";

import Spinner from "@/components/Spinner";
import AddRoleForm from "@/components/AddRoleForm";

import { useQuery } from "@tanstack/react-query";
type SheetContentType = "addRole" | "editRole" | "addEducation" | null;

const InterceptedProfilePage = () => {
  const router = useRouter();

  const [editingSummary, setEditingSummary] = useState(false);
  const [sheetContent, setSheetContent] = useState<SheetContentType>(null);

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`
      );

      if (!response.ok) {
        throw new Error("failed to fetch profile data");
      }

      const data = await response.json();

      return data.data as User & {
        summary?: string;
        previousCareers?: CareerHistory[];
      };
    },
  });

  const renderSheetTitle = () => {
    switch (sheetContent) {
      case "addRole":
        return "Add Career History";
      case "editRole":
        return "Edit Career History";
      case "addEducation":
        return "Add Education";
      default:
        return "";
    }
  };

  const renderSheetContent = () => {
    switch (sheetContent) {
      case "addRole":
        return <AddRoleForm onCancel={() => setSheetContent(null)} />;
      default:
        return null;
    }
  };

  console.log(profileData);

  return (
    <>
      <Dialog
        open
        onOpenChange={(isOpen) => {
          if (!isOpen) router.back();
        }}
      >
        <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-3xl h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Your Profile</DialogTitle>
            <DialogDescription>
              Manage your career history, skills, and resume. This information
              helps employers find you.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-grow overflow-y-auto pr-4 -mr-4 space-y-8 py-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Personal Summary</h2>
              {profileData?.summary ? (
                <p>{profileData.summary}</p>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground">
                    {editingSummary
                      ? "Highlight your unique experiences, ambitions and strengths."
                      : "You haven't added a summary yet."}
                  </p>
                  {editingSummary && <Textarea />}
                  <Button
                    variant="outline"
                    onClick={() => setEditingSummary((prev) => !prev)}
                  >
                    {editingSummary ? "Save" : "Add Summary"}
                  </Button>
                </>
              )}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Career History</h2>
              {profileData?.previousCareers &&
              profileData?.previousCareers?.length > 0 ? (
                profileData?.previousCareers?.map((career: CareerHistory) => (
                  <CareerCard
                    company={career.company}
                    dateEnded={career.dateEnded}
                    dateStarted={career.dateStarted}
                    title={career.title}
                    key={career.id}
                  />
                ))
              ) : isLoading ? (
                <Spinner className="m-4" />
              ) : (
                <p>no career history</p>
              )}
              <Button
                variant={"outline"}
                onClick={() => setSheetContent("addRole")}
              >
                Add Role
              </Button>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Education</h2>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Languages</h2>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Resume</h2>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">About your next role</h2>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Sheet
        open={!!sheetContent}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSheetContent(null);
        }}
      >
        <SheetContent className="p-4">
          <SheetHeader>
            <SheetTitle className="">{renderSheetTitle()}</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">{renderSheetContent()}</div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default InterceptedProfilePage;
