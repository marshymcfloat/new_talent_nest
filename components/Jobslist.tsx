import React from "react";
import JobCard from "./JobCard";
import { Skeleton } from "./ui/skeleton";
import { Prisma } from "@prisma/client";

type JobWithQuestions = Prisma.JobGetPayload<{
  include: {
    employerQuestions: true;
    company: true;
  };
}>;

const Jobslist = ({
  selectedJobId,
  data,
  isLoading,
  onSelect,
}: {
  data: { data: JobWithQuestions[] };
  selectedJobId: string | undefined;
  isLoading: boolean;
  onSelect: (job: JobWithQuestions) => void;
}) => {
  if (isLoading)
    return (
      <div className="flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-full h-[150px]" />
        ))}
      </div>
    );

  if (!data?.data || data.data.length === 0) {
    return <p>No jobs found.</p>;
  }

  return (
    <section className="flex flex-col gap-4 overflow-y-auto md-max-h-[95%] p-2">
      {data.data.map((job) => (
        <JobCard
          key={job.id}
          {...job}
          selected={selectedJobId === job.id}
          onClick={() => onSelect(job)}
        />
      ))}
    </section>
  );
};

export default Jobslist;
