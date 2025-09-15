import React, { Suspense } from "react";
import { JobsDataContainer } from "./JobsDataContainer";
import { StatCard } from "@/components/Employers/StatCard";
import { Briefcase, PauseCircle, Users } from "lucide-react";
import { JobsPageSkeleton } from "./JobsPageSkeleton";

const EmployersJobsTab = () => {
  return (
    <Suspense
      fallback={
        <>
          <JobsPageSkeleton />
        </>
      }
    >
      <JobsDataContainer />
    </Suspense>
  );
};

export default EmployersJobsTab;
