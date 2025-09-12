// Imports remain mostly the same, but you no longer need prisma or the specific icons here
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import QuickActionnDashboardButton from "./QuickActionDashboardButton";
import { Suspense } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { ApplicantChart } from "./ApplicantChartComponent";
import { RecentApplicants } from "./RecentApplicants";
// Import your new component
import { DashboardStatCards } from "./DashboardStatCard";

const StatCardSkeleton = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-4 w-48" />
        </div>
      </CardContent>
    </Card>
  );
};

const StatCardsSkeletonGroup = () => {
  return (
    <>
      <StatCardSkeleton />
      <StatCardSkeleton />
      <StatCardSkeleton />
      <StatCardSkeleton />
    </>
  );
};

const EmployerDashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome back, {session?.user?.name}!
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <QuickActionnDashboardButton />

          <Suspense fallback={<StatCardsSkeletonGroup />}>
            <DashboardStatCards />
          </Suspense>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <ApplicantChart />
          </div>
          <div className="lg:col-span-3">
            <RecentApplicants applications={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
