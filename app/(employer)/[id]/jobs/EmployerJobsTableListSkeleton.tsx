import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export const JobListTableSkeleton = () => {
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="lg:w-[25%]">Job Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Applicants</TableHead>
            <TableHead>New Applicants</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Date Posted</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skeletonRows.map((_, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium lg:w-[25%]">
                <Skeleton className="h-5 w-4/5" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-[70px] rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-[30px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-[30px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-[100px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-[90px]" />
              </TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="h-5 w-5 rounded-full" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
