"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./ApplicantTableColumns";
import { ApplicantWithDetails } from "./ApplicantsDataContainer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplicationStatus } from "@prisma/client";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

interface EmployersApplicantsTabProps {
  initialApplicants: ApplicantWithDetails[];
  allJobs: { id: string; title: string }[];
  initialJobId?: string;
}

export default function EmployersApplicantsTab({
  initialApplicants,
  allJobs,
  initialJobId,
}: EmployersApplicantsTabProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: initialApplicants,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
  });

  const handleFilterChange = (type: "job" | "status", value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (!value || value === "all") {
      current.delete(type === "job" ? "jobId" : "status");
    } else {
      current.set(type === "job" ? "jobId" : "status", value);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Applicants</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 py-4">
          <Input
            placeholder="Filter by applicant name..."
            value={(table.getColumn("User")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("User")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <Select
            onValueChange={(value) => handleFilterChange("job", value)}
            defaultValue={initialJobId || "all"}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Filter by job..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              {allJobs.map((job) => (
                <SelectItem key={job.id} value={job.id}>
                  {job.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => handleFilterChange("status", value)}
            defaultValue={searchParams.get("status") || "all"}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {Object.values(ApplicationStatus).map((status) => (
                <SelectItem key={status} value={status}>
                  {status.replace("_", " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DataTable table={table} columns={columns} />

        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
