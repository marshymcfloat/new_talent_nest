"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ApplicantWithDetails } from "./ApplicantsDataContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ExternalLink, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplicationStatus } from "@prisma/client";
import { useTransition } from "react";
import { updateApplicationStatus } from "./employerApplicantsAction";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import Link from "next/link";

const StatusSelector = ({ row }: { row: any }) => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const application: ApplicantWithDetails = row.original;
  const statuses = Object.values(ApplicationStatus);

  const onStatusChange = (newStatus: ApplicationStatus) => {
    startTransition(async () => {
      const result = await updateApplicationStatus(
        application.id,
        newStatus,
        pathname
      );
      if (result.success) {
        toast.success(`Applicant moved to "${newStatus.replace("_", " ")}"`);
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <Select
      onValueChange={onStatusChange}
      defaultValue={application.status}
      disabled={isPending}
    >
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Change status..." />
      </SelectTrigger>
      <SelectContent>
        {statuses.map((status) => (
          <SelectItem key={status} value={status}>
            {status.replace("_", " ")}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const columns: ColumnDef<ApplicantWithDetails>[] = [
  {
    accessorKey: "User",
    header: "Applicant",
    accessorFn: (row) => row.User.name || "",
    cell: ({ row }) => {
      const user = row.original.User;
      const name = user.name || "N/A";
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.image || undefined} />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{name}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "Job.title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Job Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusSelector,
  },
  {
    accessorKey: "createdAt",
    header: "Date Applied",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
  },
  {
    id: "resume",
    header: "Resume",
    cell: ({ row }) => (
      <Button variant="outline" size="sm" asChild>
        <a
          href={row.original.resume.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View <ExternalLink className="ml-2 h-3 w-3" />
        </a>
      </Button>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const application = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/employer/applicants/${application.id}`}>
                View Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Add Note</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
