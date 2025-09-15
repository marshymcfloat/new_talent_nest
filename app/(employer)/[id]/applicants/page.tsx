import { Suspense } from "react";
import { ApplicantsDataContainer } from "./ApplicantsDataContainer";
import { Skeleton } from "@/components/ui/skeleton";

export default async function ApplicantsPage({
  searchParams,
}: {
  searchParams: Promise<{ jobId?: string; status?: string }>;
}) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Suspense fallback={<Skeleton className="h-[600px] w-full rounded-lg" />}>
        <ApplicantsDataContainer searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
