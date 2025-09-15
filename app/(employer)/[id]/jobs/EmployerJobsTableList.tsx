"use client";

import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreateJobForm } from "@/components/Employers/CreateJobForm";
import { EmployerJobDataTable } from "./EmployerJobsDataTable";
import { JobWithApplicantCounts, JobPageStats } from "./JobsDataContainer";
import { createColumns } from "./EmployerJobsTableColumns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Briefcase, PauseCircle, Users } from "lucide-react";

import { StatCard } from "@/components/Employers/StatCard";

interface EmployerJobsTableListProps {
  jobs: JobWithApplicantCounts[];
  stats: JobPageStats;
}

export default function EmployerJobsTableList({
  jobs,
  stats,
}: EmployerJobsTableListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobWithApplicantCounts | null>(
    null
  );

  const handleEdit = (job: JobWithApplicantCounts) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  const handleDuplicate = (job: JobWithApplicantCounts) => {
    const {
      id,
      createdAt,
      updatedAt,
      JobApplication,
      _countByStatus,
      ...jobCopy
    } = job;
    setEditingJob({
      ...jobCopy,
      status: "ACTIVE",
      id: "", // Ensure form knows it's a new job
      createdAt: new Date(),
      updatedAt: new Date(),
      JobApplication: [],
      _countByStatus: {},
    });
    setIsModalOpen(true);
  };

  // ✨ NEW: Handle creating a new job
  const handleCreateNew = () => {
    setEditingJob(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingJob(null);
  };

  const columns = useMemo(() => createColumns(handleEdit, handleDuplicate), []);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Active Jobs"
          value={stats.activeJobs}
          description="Jobs currently visible to applicants."
          icon={Briefcase}
        />
        <StatCard
          title="Paused Jobs"
          value={stats.pausedJobs}
          description="Jobs hidden from public view."
          icon={PauseCircle}
        />
        <StatCard
          title="New Applicants"
          value={`+${stats.newApplicantsThisWeek}`}
          description="In the last 7 days."
          icon={Users}
        />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Manage Jobs</CardTitle>
          <Button onClick={handleCreateNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Job
          </Button>
        </CardHeader>
        <CardContent>
          <EmployerJobDataTable columns={columns} data={jobs} />
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[80vw] max-h-[95vh] overflow-y-auto md:max-w-[60vw] lg:max-w-[50vw]">
          <DialogHeader>
            <DialogTitle>
              {editingJob?.id
                ? `Edit Job: ${editingJob.title}`
                : "Create a New Job"}
            </DialogTitle>
          </DialogHeader>

          <CreateJobForm
            job={editingJob ? editingJob : undefined}
            onSuccess={handleCloseModal}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
