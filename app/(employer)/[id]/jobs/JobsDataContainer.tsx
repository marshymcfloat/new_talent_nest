import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import EmployerJobsTableList from "./EmployerJobsTableList";
import { ApplicationStatus, JobStatus } from "@prisma/client";
import { subDays } from "date-fns";

interface SimpleApplication {
  status: ApplicationStatus;
  createdAt: string;
}

export type JobWithApplicantCounts = Omit<
  Awaited<ReturnType<typeof getJobsForCompany>>[number],
  "JobApplication"
> & {
  JobApplication: SimpleApplication[];
  _countByStatus: { [key in ApplicationStatus]?: number };
};

export type JobPageStats = {
  activeJobs: number;
  pausedJobs: number;
  newApplicantsThisWeek: number;
};

const getJobsForCompany = async (userId: string) => {
  const userInfo = await prisma.companyMember.findFirst({ where: { userId } });
  if (!userInfo) return [];

  const jobs = await prisma.job.findMany({
    where: { companyId: userInfo.companyId },
    include: {
      JobApplication: {
        select: { status: true, createdAt: true },
      },
      company: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const processedJobs = jobs.map((job) => {
    const _countByStatus = job.JobApplication.reduce(
      (acc: { [key in ApplicationStatus]?: number }, application) => {
        acc[application.status] = (acc[application.status] || 0) + 1;
        return acc;
      },
      {}
    );

    return { ...job, _countByStatus };
  });

  return JSON.parse(JSON.stringify(processedJobs));
};

export const JobsDataContainer = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    return <div>You must be logged in to see this content.</div>;
  }

  const jobsData = await getJobsForCompany(session.user.id);

  const stats: JobPageStats = jobsData.reduce(
    (acc: JobPageStats, job: JobWithApplicantCounts) => {
      if (job.status === "ACTIVE") acc.activeJobs++;
      if (job.status === "PAUSED") acc.pausedJobs++;

      const oneWeekAgo = subDays(new Date(), 7);

      const newApps = job.JobApplication.filter(
        (app: SimpleApplication) => new Date(app.createdAt) > oneWeekAgo
      ).length;
      acc.newApplicantsThisWeek += newApps;

      return acc;
    },
    { activeJobs: 0, pausedJobs: 0, newApplicantsThisWeek: 0 }
  );

  return (
    <EmployerJobsTableList
      jobs={jobsData as JobWithApplicantCounts[]}
      stats={stats}
    />
  );
};
