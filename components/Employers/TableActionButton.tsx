"use client";

import { useState } from "react";
import {
  EditIcon,
  Ellipsis,
  Eye,
  Trash,
  MapPin,
  Briefcase,
  Users,
  CalendarDays,
  CircleDollarSign,
  Building,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge"; // <-- Import Badge
import { Separator } from "@/components/ui/separator"; // <-- Import Separator
import { JobsResponse } from "@/app/(employer)/[id]/jobs/EmployerJobsTableList";
import { cn } from "@/lib/utils";
import { CreateJobForm } from "./CreateJobForm";
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

const formatSalary = (
  min: number | null,
  max: number | null,
  currency: string,
  period: string | null
) => {
  if (!min && !max) return "Not specified";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let salaryRange = "";
  if (min && max) {
    salaryRange = `${formatter.format(min)} - ${formatter.format(max)}`;
  } else if (min) {
    salaryRange = `From ${formatter.format(min)}`;
  } else if (max) {
    salaryRange = `Up to ${formatter.format(max)}`;
  }

  return `${salaryRange}${period ? ` / ${period.toLowerCase()}` : ""}`;
};

const DetailItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) => (
  <div className="flex items-start gap-3">
    <Icon className="mt-1 h-4 w-4 text-muted-foreground" />
    <div>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-base font-semibold">{value}</p>
    </div>
  </div>
);

const TableActionButton = ({ job }: { job?: JobsResponse }) => {
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-auto flex h-5 w-5 cursor-pointer items-center justify-center rounded-full p-0.5 outline-0 transition-all duration-150 hover:bg-purple-200">
          <Ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setIsViewDialogOpen(true)}>
            <Eye className="mr-2 size-4" />
            <span>View</span>
          </DropdownMenuItem>

          <DropdownMenuItem onSelect={() => setIsEditDialogOpen(true)}>
            <EditIcon className="mr-2 size-4" />
            <span>Edit</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-red-500 focus:text-red-500"
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            <Trash className="mr-2 size-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{" "}
              <span className="font-medium capitalize">{job?.title}</span>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              New Job Posting
            </DialogTitle>
          </DialogHeader>

          <div className="px-1 py-4">
            <CreateJobForm job={job} onSuccess={() => {}} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          {!job ? (
            <DialogHeader>
              <DialogTitle>Loading...</DialogTitle>
              <DialogDescription>
                Please wait while job details are being loaded.
              </DialogDescription>
            </DialogHeader>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-2xl">
                  {job.title}
                  <Badge
                    className={cn(
                      job.status === "PAUSED" && "bg-amber-200",
                      job.status === "ACTIVE" && "bg-green-300 text-black",
                      job.status === "CLOSED" && "bg-red-400"
                    )}
                  >
                    {job.status}
                  </Badge>
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2 pt-1">
                  <Building className="h-4 w-4" />
                  Posted by Company ID:{" "}
                  <span className="font-medium">{job.company.name}</span>
                </DialogDescription>
              </DialogHeader>

              <Separator />

              <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
                <DetailItem
                  icon={MapPin}
                  label="Location"
                  value={job.location}
                />
                <DetailItem
                  icon={Briefcase}
                  label="Job Type"
                  value={job.type}
                />
                <DetailItem
                  icon={CircleDollarSign}
                  label="Salary"
                  value={formatSalary(
                    job.minSalary,
                    job.maxSalary,
                    job.currency,
                    job.payPeriod
                  )}
                />
                <DetailItem
                  icon={CalendarDays}
                  label="Posted On"
                  value={new Date(job.createdAt).toLocaleDateString()}
                />
                <DetailItem
                  icon={Users}
                  label="Total Applicants"
                  value={job.JobApplication.length}
                />
              </div>

              {job.tags && job.tags.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-medium text-muted-foreground">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Separator />

              <div>
                <h3 className="mb-2 text-lg font-semibold">Job Description</h3>

                <div
                  className="prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{
                    __html: job.summary || "No description provided.",
                  }}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TableActionButton;
