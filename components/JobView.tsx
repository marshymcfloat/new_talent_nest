"use client";

import React, { useEffect, useState } from "react";
import Jobslist from "./Jobslist";
import JobDescription from "./JobDescription";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./ui/card";
import { Prisma } from "@prisma/client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useMediaQuery } from "@/app/hooks/UseMediaQuery";

type JobWithQuestions = Prisma.JobGetPayload<{
  include: {
    employerQuestions: true;
  };
}>;

const JobView = () => {
  const [selectedJob, setSelectedJob] = useState<JobWithQuestions | null>(null);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const { data, isLoading } = useQuery<{ data: JobWithQuestions[] }>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`
      );
      if (!response.ok) throw new Error("Failed to fetch jobs");
      return await response.json();
    },
  });

  useEffect(() => {
    if (!isMobile && !selectedJob && data?.data && data.data.length > 0) {
      setSelectedJob(data.data[0]);
    }
  }, [data, selectedJob, isMobile]);

  return (
    <>
      <div className="hidden md:flex w-full gap-4">
        <div className="w-1/3 p-4">
          <Jobslist
            selectedJobId={selectedJob?.id}
            data={data || { data: [] }}
            isLoading={isLoading}
            onSelect={setSelectedJob}
          />
        </div>
        <div className="w-2/3 p-4">
          {selectedJob ? (
            <div className="sticky top-4">
              <JobDescription {...selectedJob} />
            </div>
          ) : (
            !isLoading && (
              <Card className="w-full bg-purple-200 h-[800px] flex justify-center items-center">
                <h1 className="uppercase font-bold text-2xl text-purple-900">
                  Please select a job
                </h1>
              </Card>
            )
          )}
        </div>
      </div>

      <div className="md:hidden w-full p-4">
        <Jobslist
          selectedJobId={selectedJob?.id}
          data={data || { data: [] }}
          isLoading={isLoading}
          onSelect={setSelectedJob}
        />

        <Sheet
          open={isMobile && !!selectedJob}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setSelectedJob(null);
            }
          }}
        >
          <SheetContent className="p-0 border-none w-[90vw] sm:max-w-lg bg-transparent overflow-y-auto">
            {selectedJob && (
              <>
                <SheetHeader>
                  <SheetTitle className="sr-only">
                    {selectedJob.title}
                  </SheetTitle>
                </SheetHeader>
                <JobDescription {...selectedJob} />
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default JobView;
