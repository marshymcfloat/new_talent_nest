import React from "react";
import { Job } from "@prisma/client";
import JobCard from "./JobCard";
import Spinner from "./Spinner";
import { Skeleton } from "./ui/skeleton";

const Jobslist = ({
  selected,
  data,
  isLoading,
  onSelect,
}: {
  data: { data: Job[] };
  selected: string | undefined;
  isLoading: boolean;
  onSelect: (job: Job) => void;
}) => {
  if (isLoading)
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-[150px] " />
        <Skeleton className="w-full h-[150px] " />
        <Skeleton className="w-full h-[150px] " />
        <Skeleton className="w-full h-[150px] " />
        <Skeleton className="w-full h-[150px] " />
      </div>
    );
  return (
    <>
      {data && (
        <section className="flex flex-col gap-4">
          {data.data.map((job) => (
            <JobCard
              selected={selected}
              key={job.id}
              {...job}
              onClick={() => onSelect(job)}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Jobslist;
