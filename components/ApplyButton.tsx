"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { signIn, useSession } from "next-auth/react";
import { FileTextIcon, XIcon } from "lucide-react"; // Nice icons for feedback

const ApplyButton = ({
  title,
  summary,
}: {
  title: string;
  summary: string;
}) => {
  const [resume, setResume] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null); // Use lowercase 'string'
  const { data, status } = useSession();

  useEffect(() => {
    if (!resume) {
      setPreviewURL(null);
      return;
    }

    const objectURL = URL.createObjectURL(resume);
    setPreviewURL(objectURL);

    // Cleanup function to avoid memory leaks
    return () => URL.revokeObjectURL(objectURL);
  }, [resume]);

  const clearResume = () => {
    setResume(null);
  };

  return (
    <>
      <Sheet>
        {status === "unauthenticated" ? (
          <Button className="min-w-[120px]" onClick={() => signIn()}>
            Apply
          </Button>
        ) : (
          <SheetTrigger className="text-white rounded-md justify-center flex items-center bg-purple-800 duration-150 transition-all hover:bg-purple-800/80 h-10 px-4 py-2 min-w-[120px]">
            Apply
          </SheetTrigger>
        )}

        <SheetContent className="p-4">
          <SheetHeader>
            <SheetTitle>Apply for {title}</SheetTitle>
            <SheetDescription>{summary}</SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-2">
            <Label>Resume (PDF or DOCX)</Label>
            {resume && previewURL ? (
              <div className="space-y-2">
                {/* PDF Preview with iframe */}
                {resume.type === "application/pdf" ? (
                  <iframe
                    src={previewURL}
                    className="w-full h-80 border rounded-md"
                    title="Resume Preview"
                  />
                ) : (
                  // Fallback for DOCX and other files - NO PREVIEW
                  <div className="w-full border rounded-md p-4 flex flex-col items-center justify-center bg-gray-50 text-center">
                    <FileTextIcon className="w-10 h-10 text-gray-400" />
                    <p className="text-sm font-semibold mt-2 break-all">
                      {resume.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      File selected. A preview is not available for this format.
                    </p>
                  </div>
                )}
                <Button variant="outline" size="sm" onClick={clearResume}>
                  <XIcon className="w-4 h-4 mr-2" />
                  Remove File
                </Button>
              </div>
            ) : (
              <Input
                type="file"
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files && e.target.files[0]) {
                    setResume(e.target.files[0]);
                  }
                }}
              />
            )}
            <Button className="w-full mt-4" disabled={!resume}>
              Submit Application
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ApplyButton;
