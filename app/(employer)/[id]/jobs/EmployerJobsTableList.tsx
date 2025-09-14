import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import TableActionButton from "@/components/Employers/TableActionButton";

// This type will automatically update to include the new `questions` array
export type JobsResponse = Awaited<ReturnType<typeof getJobs>>[number];

const getJobs = async (userId: string) => {
  const userInfo = await prisma.companyMember.findFirst({ where: { userId } });

  if (!userInfo?.companyId) {
    return [];
  }

  const jobs = await prisma.job.findMany({
    where: {
      companyId: userInfo.companyId,
    },
    include: {
      JobApplication: true,
      company: true,
      // 👇 CORRECTED INCLUDE CLAUSE BASED ON YOUR SCHEMA
      // The relation on the 'Job' model is named `questions`, which links to `QuestionsOnJobs`.
      questions: {
        // We select only the fields needed by the form
        select: {
          questionId: true,
          isRequired: true,
        },
      },
    },
  });

  // No mapping is needed because the relation name 'questions'
  // already matches what the form expects.
  return jobs;
};

const EmployerJobsTableList = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    return <p className="p-4 text-center">Please log in to view jobs.</p>;
  }

  const response = await getJobs(session.user.id);

  return (
    <Table>
      <TableCaption>A list of the recent jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="lg:w-[25%]">Job Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Applicants</TableHead>
          <TableHead>New Applicants</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Date Posted</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {response.map((job) => (
          <TableRow key={job.id}>
            <TableCell className="font-medium lg:w-[25%] capitalize">
              {job.title}
            </TableCell>
            <TableCell className="lowercase">
              <Badge
                className={cn(
                  job.status === "PAUSED" && "bg-amber-200",
                  job.status === "ACTIVE" && "bg-green-300 text-black",
                  job.status === "CLOSED" && "bg-red-400"
                )}
              >
                {job.status}
              </Badge>
            </TableCell>
            <TableCell>{job.JobApplication.length}</TableCell>
            <TableCell>{job.JobApplication.length}</TableCell>
            <TableCell>{job.location}</TableCell>
            <TableCell>{job.createdAt.toLocaleDateString("en-PH")}</TableCell>
            <TableCell>
              {/* This component will now receive the job prop with the `questions` array */}
              <TableActionButton job={job} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmployerJobsTableList;
