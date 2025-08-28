"use client";

import React, { useState } from "react";
import Jobslist from "./Jobslist";
import JobDescription from "./JobDescription";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./ui/card";
import { Prisma } from "@prisma/client";

type JobWithQuestions = Prisma.JobGetPayload<{
  include: {
    employerQuestions: true;
  };
}>;

const JobView = () => {
  const [selectedJob, setSelectedJob] = useState<JobWithQuestions | null>(null);

  const { data, isLoading } = useQuery<{ data: JobWithQuestions[] }>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXTURL}/api/jobs`);
      if (!response.ok) throw new Error("Failed to fetch jobs");
      return await response.json();
    },
  });

  return (
    <>
      <div className="w-1/3 p-4">
        <Jobslist
          selected={selectedJob?.title}
          data={data || { data: [] }}
          isLoading={isLoading}
          onSelect={setSelectedJob}
        />
      </div>
      <div className="w-2/3 p-4">
        {selectedJob ? (
          <JobDescription {...selectedJob} />
        ) : (
          <Card className="w-[64%] bg-purple-200 fixed flex justify-center items-center lg:h-[800px]">
            <h1 className="uppercase font-bold text-2xl">
              please select a job
            </h1>
          </Card>
        )}
      </div>
    </>
  );
};

export default JobView;
