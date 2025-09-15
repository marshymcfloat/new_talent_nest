"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { JobWithApplicantCounts } from "./JobsDataContainer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useTransition, useState } from "react";
import {
  closeEmployerJob,
  pauseEmployerJob,
  activateEmployerJob,
} from "./employerJobsTabActions";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ApplicationStatus } from "@prisma/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const JobActions = ({
  job,
  onEdit,
  onDuplicate,
}: {
  job: JobWithApplicantCounts;
  onEdit: (job: JobWithApplicantCounts) => void;
  onDuplicate: (job: JobWithApplicantCounts) => void;
}) => {
  const [isPending, startTransition] = useTransition();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertConfig, setAlertConfig] = useState<{
    title: string;
    description: string;
    onConfirm: () => void;
  } | null>(null);

  const router = useRouter();

  const handleStatusChange = (
    action: (jobId: string) => Promise<any>,
    successMessage: string
  ) => {
    startTransition(async () => {
      const result = await action(job.id);
      if (result.success) {
        toast.success(successMessage);
        router.refresh();
      } else {
        toast.error(result.error || "An error occurred.");
      }
      setIsAlertOpen(false);
    });
  };

  const confirmClose = () => {
    setAlertConfig({
      title: "Are you sure you want to close this job?",
      description:
        "Applicants will no longer see or apply for this position. This can be changed later by editing the job.",
      onConfirm: () =>
        handleStatusChange(closeEmployerJob, "Job has been closed."),
    });
    setIsAlertOpen(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href={`/employer/applicants?jobId=${job.id}`}>
              View Applicants
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onEdit(job)}>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDuplicate(job)}>
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {job.status !== "ACTIVE" && (
            <DropdownMenuItem
              onClick={() =>
                handleStatusChange(
                  activateEmployerJob,
                  "Job has been activated."
                )
              }
            >
              Activate Job
            </DropdownMenuItem>
          )}
          {job.status !== "PAUSED" && (
            <DropdownMenuItem
              onClick={() =>
                handleStatusChange(pauseEmployerJob, "Job has been paused.")
              }
            >
              Pause Job
            </DropdownMenuItem>
          )}
          {job.status !== "CLOSED" && (
            <DropdownMenuItem
              className="text-red-500 focus:text-red-500 focus:bg-red-50"
              onClick={confirmClose}
              onSelect={(e) => e.preventDefault()}
            >
              Close Job
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertConfig?.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertConfig?.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={isPending}
              onClick={alertConfig?.onConfirm}
            >
              {isPending ? "Updating..." : "Continue"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export const createColumns = (
  onEdit: (job: JobWithApplicantCounts) => void,
  onDuplicate: (job: JobWithApplicantCounts) => void
): ColumnDef<JobWithApplicantCounts>[] => [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Job Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize pl-4 font-medium">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          className={cn(
            "capitalize border-none",
            status === "ACTIVE" &&
              "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
            status === "PAUSED" &&
              "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400",
            status === "CLOSED" &&
              "bg-zinc-100 text-zinc-800 dark:bg-zinc-900/20 dark:text-zinc-400"
          )}
        >
          {status.toLowerCase()}
        </Badge>
      );
    },
  },

  {
    accessorKey: "JobApplication",
    header: "Applicants",
    cell: ({ row }) => {
      const applications: unknown[] = row.getValue("JobApplication");
      const counts = row.original._countByStatus;

      const breakdown = (Object.keys(counts) as ApplicationStatus[])
        .map((status) => `${counts[status]} ${status.toLowerCase()}`)
        .join(", ");

      return (
        <div className="text-center" title={breakdown}>
          {applications.length}
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("type")?.toString().replace("_", " ").toLowerCase()}
      </div>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "createdAt",
    header: "Date Posted",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const job = row.original;
      return <JobActions job={job} onEdit={onEdit} onDuplicate={onDuplicate} />;
    },
  },
];
