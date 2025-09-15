import React, { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobsDataContainer } from "./JobsDataContainer"; // Import the new component
import { Job as PrismaJob, Company, JobApplication } from "@prisma/client";
import { JobListTableSkeleton } from "./EmployerJobsTableListSkeleton";

const EmployersJobsTab = () => {
  return (
    <Card>
      <CardHeader className="mt-4 flex flex-row items-center justify-between">
        <CardTitle>Manage Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<JobListTableSkeleton />}>
          {/* 
            React will render the shell, see this async component, 
            show the fallback, and wait for JobsDataContainer to resolve.
          */}
          <JobsDataContainer />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default EmployersJobsTab;
