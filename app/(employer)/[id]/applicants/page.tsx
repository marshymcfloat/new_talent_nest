import { Suspense } from "react";
import { ApplicantsDataContainer } from "./ApplicantsDataContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { ApplicantsPageSkeleton } from "./ApplicantsPageSkeleton";

export default async function ApplicantsPage({
  searchParams,
}: {
  searchParams: Promise<{ jobId?: string; status?: string }>;
}) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Suspense fallback={<ApplicantsPageSkeleton />}>
        <ApplicantsDataContainer searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
