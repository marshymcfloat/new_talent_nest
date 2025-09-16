import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileSkeleton = () => {
  return (
    <Dialog open>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-3xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Your Profile</DialogTitle>
          <DialogDescription>Loading your profile details...</DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-y-auto pr-4 -mr-4 space-y-8 py-4 animate-pulse">
          {/* Summary Skeleton */}
          <div className="p-6 border rounded-lg space-y-4">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Career History Skeleton */}
          <div className="p-6 border rounded-lg space-y-6">
            <div className="flex justify-between items-center">
              <Skeleton className="h-8 w-1/4" />
              <Skeleton className="h-10 w-28" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-20 w-full rounded-lg" />
              <Skeleton className="h-20 w-full rounded-lg" />
            </div>
          </div>

          {/* Education Skeleton */}
          <div className="p-6 border rounded-lg space-y-6">
            <div className="flex justify-between items-center">
              <Skeleton className="h-8 w-1/4" />
              <Skeleton className="h-10 w-32" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSkeleton;
