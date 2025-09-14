import React, { Suspense } from "react";
import EmployerJobsTableList from "./EmployerJobsTableList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobListTableSkeleton } from "./EmployerJobsTableListSkeleton";

const EmployersJobsTab = () => {
  return (
    <>
      <Card>
        <CardHeader className="mt-4">
          <CardTitle>Created Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<JobListTableSkeleton />}>
            <EmployerJobsTableList />
          </Suspense>
        </CardContent>
      </Card>
    </>
  );
};

export default EmployersJobsTab;
