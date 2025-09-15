"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { JobWithDetails } from "./page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useTransition, useState } from "react";
import { closeEmployerJob } from "./employerJobsTabActions";
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const JobActions = ({
  job,
  onEdit,
}: {
  job: JobWithDetails;
  onEdit: (job: JobWithDetails) => void;
}) => {
  const [isPending, startTransition] = useTransition();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleCloseJob = () => {
    startTransition(async () => {
      const result = await closeEmployerJob(job.id);
      if (result.success) {
        toast.success("Job has been closed.");
      } else {
        toast.error(result.error || "Failed to close job.");
      }
      setIsAlertOpen(false);
    });
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
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(job.id)}
          >
            Copy Job ID
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onEdit(job)}>Edit</DropdownMenuItem>
          <DropdownMenuItem>View Applicants</DropdownMenuItem>

          <DropdownMenuItem
            className="text-red-500 focus:text-red-500 focus:bg-red-50"
            disabled={isPending || job.status === "CLOSED"}
            onClick={() => setIsAlertOpen(true)}
            onSelect={(e) => e.preventDefault()}
          >
            {isPending ? "Closing..." : "Close Job"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will set the job status to "CLOSED". Applicants will no
              longer be able to see or apply for this position. This action can
              be changed later by editing the job.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="" onClick={handleCloseJob}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export const createColumns = (
  onEdit: (job: JobWithDetails) => void
): ColumnDef<JobWithDetails>[] => [
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
      return <div className="text-center">{applications.length}</div>;
    },
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
      return <JobActions job={job} onEdit={onEdit} />;
    },
  },
];
