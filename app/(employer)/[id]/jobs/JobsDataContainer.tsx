import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import EmployerJobsTableList from "./EmployerJobsTableList";
import { JobWithDetails } from "./page";

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

export const JobsDataContainer = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    return <div>You must be logged in to see this content.</div>;
  }

  const jobsData = await getJobsForCompany(session.user.id);

  return <EmployerJobsTableList jobs={jobsData as JobWithDetails[]} />;
};
