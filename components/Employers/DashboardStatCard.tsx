import { Briefcase, Users, UserCheck, FileClock } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { StatCard } from "./StatCard";

const getCompanyIdForCurrentUser = async (userId: string) => {
  const companyMember = await prisma.companyMember.findFirst({
    where: { userId: userId },
    select: { companyId: true },
  });
  return companyMember?.companyId;
};
const getDashboardData = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return redirect("/login");
  }

  const companyId = await getCompanyIdForCurrentUser(session.user.id);

  if (!companyId) {
    return {
      activeJobs: 0,
      totalApplicants: 0,
      newApplicants: 0,
      interviewsToday: 0,
      recentApplicants: [],
    };
  }

  const activeJobs = await prisma.job.count({
    where: { companyId: companyId, status: "ACTIVE" },
  });

  const totalApplicants = await prisma.jobApplication.count({
    where: { Job: { companyId: companyId } },
  });

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const newApplicants = await prisma.jobApplication.count({
    where: {
      Job: { companyId: companyId },
      createdAt: { gte: oneWeekAgo },
      status: "NEW",
    },
  });

  const recentApplicants = await prisma.jobApplication.findMany({
    where: { Job: { companyId: companyId } },
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      User: {
        select: {
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  return {
    activeJobs,
    totalApplicants,
    newApplicants,
    interviewsToday: 0,
    recentApplicants,
  };
};
export const DashboardStatCards = async () => {
  const data = await getDashboardData();

  return (
    <>
      <StatCard
        title="Active Jobs"
        value={data.activeJobs}
        description="Jobs currently visible to applicants."
        icon={Briefcase}
      />
      <StatCard
        title="Total Applicants"
        value={data.totalApplicants}
        description="All applications received."
        icon={Users}
      />
      <StatCard
        title="New Applicants"
        value={`+${data.newApplicants}`}
        description="In the last 7 days."
        icon={UserCheck}
      />
      <StatCard
        title="Interviews Today"
        value={data.interviewsToday}
        description="Scheduled for today."
        icon={FileClock}
      />
    </>
  );
};
