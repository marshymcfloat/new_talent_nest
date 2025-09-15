"use client";

import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreateJobForm } from "@/components/Employers/CreateJobForm";
import { DataTable } from "@/components/ui/data-table";
import { JobWithDetails } from "./JobsDataContainer";
import { createColumns } from "./EmployerJobsTableColumns";
interface EmployerJobsTableListProps {
  jobs: JobWithDetails[];
}

export default function EmployerJobsTableList({
  jobs,
}: EmployerJobsTableListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobWithDetails | null>(null);

  const handleEdit = (job: JobWithDetails) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingJob(null);
  };

  const columns = useMemo(() => createColumns(handleEdit), []);

  return (
    <div>
      <DataTable columns={columns} data={jobs} />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[80vw] max-h-[95vh] overflow-y-auto md:max-w-[60vw] lg:max-w-[50vw]">
          <DialogHeader>
            <DialogTitle>Edit Job: {editingJob?.title}</DialogTitle>
          </DialogHeader>

          {editingJob && (
            <CreateJobForm job={editingJob} onSuccess={handleCloseModal} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
