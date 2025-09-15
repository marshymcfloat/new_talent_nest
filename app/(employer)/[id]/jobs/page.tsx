import React, { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobListTableSkeleton } from "./EmployerJobsTableListSkeleton";
import { JobsDataContainer } from "./JobsDataContainer";
import { Job as PrismaJob, Company, JobApplication } from "@prisma/client";

export type JobWithDetails = PrismaJob & {
  company: Company;
  JobApplication: Pick<JobApplication, "status">[];
};

const EmployersJobsTab = () => {
  return (
    <Card>
      <CardHeader className="mt-4 flex flex-row items-center justify-between">
        <CardTitle>Manage Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<JobListTableSkeleton />}>
          <JobsDataContainer />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default EmployersJobsTab;
