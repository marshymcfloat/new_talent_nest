import JobView from "@/components/JobView";
import React from "react";

const JobsPage = () => {
  return (
    <main className="w-full flex p-4 md:p-8 flex-grow overflow-y-auto">
      <JobView />
    </main>
  );
};

export default JobsPage;
