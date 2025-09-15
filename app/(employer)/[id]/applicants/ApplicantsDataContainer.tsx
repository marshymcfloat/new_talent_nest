import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  ApplicationStatus,
  Job,
  JobApplication,
  Resume,
  User,
} from "@prisma/client";
import EmployersApplicantsTab from "./EmployersApplicantsTab";

export type ApplicantWithDetails = JobApplication & {
  User: Pick<User, "name" | "email" | "image">;
  Job: Pick<Job, "id" | "title">;
  resume: Pick<Resume, "url">;
};

const getApplicantsForCompany = async (
  userId: string,
  jobId?: string,
  status?: string
) => {
  const companyMember = await prisma.companyMember.findFirst({
    where: { userId },
    select: { companyId: true },
  });

  if (!companyMember) {
    return { applicants: [], allJobs: [] };
  }

  const applicants = await prisma.jobApplication.findMany({
    where: {
      Job: {
        companyId: companyMember.companyId,
        id: jobId,
      },
      status: status as ApplicationStatus,
    },
    include: {
      User: { select: { name: true, email: true, image: true } },
      Job: { select: { id: true, title: true } },
      resume: { select: { url: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const allJobs = await prisma.job.findMany({
    where: { companyId: companyMember.companyId },
    select: { id: true, title: true },
    orderBy: { createdAt: "desc" },
  });

  return {
    applicants: JSON.parse(JSON.stringify(applicants)),
    allJobs: JSON.parse(JSON.stringify(allJobs)),
  };
};

export const ApplicantsDataContainer = async ({
  searchParams,
}: {
  searchParams: Promise<{ jobId?: string; status?: string }>;
}) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return <div>Not authenticated</div>;

  const { jobId, status } = await searchParams;

  const { applicants, allJobs } = await getApplicantsForCompany(
    session.user.id,
    jobId,
    status
  );

  return (
    <EmployersApplicantsTab
      initialApplicants={applicants as ApplicantWithDetails[]}
      allJobs={allJobs}
      initialJobId={jobId}
    />
  );
};
