import React, { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobListTableSkeleton } from "./EmployerJobsTableListSkeleton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import EmployerJobsTableList from "./EmployerJobsTableList";

const getJobsForCompany = async (userId: string) => {
  const userInfo = await prisma.companyMember.findFirst({ where: { userId } });
  if (!userInfo) return [];

  const jobs = await prisma.job.findMany({
    where: { companyId: userInfo.companyId },
    include: {
      JobApplication: { select: { status: true } },
      company: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return JSON.parse(JSON.stringify(jobs));
};

export type JobWithDetails = Awaited<
  ReturnType<typeof getJobsForCompany>
>[number];

const EmployersJobsTab = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) return null;

  const jobsData = await getJobsForCompany(session.user.id);

  return (
    <Card>
      <CardHeader className="mt-4 flex flex-row items-center justify-between">
        <CardTitle>Manage Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<JobListTableSkeleton />}>
          <EmployerJobsTableList jobs={jobsData} />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default EmployersJobsTab;
