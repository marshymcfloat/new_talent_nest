import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const JobsPageSkeleton = () => {
  const skeletonRows = Array.from({ length: 4 });

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-4 rounded-sm" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-8 mb-2" />
              <Skeleton className="h-3 w-4/5" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-10 w-[120px] rounded-lg" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-10 w-full max-w-sm rounded-lg" />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30%]">Job Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applicants</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Date Posted</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skeletonRows.map((_, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <Skeleton className="h-5 w-4/5" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-6 w-[70px] rounded-full" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-3 mx-auto" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-[70px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-[160px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-[90px]" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="h-5 w-5 ml-auto" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-end space-x-2 pt-4">
            <Skeleton className="h-9 w-24 rounded-md" />
            <Skeleton className="h-9 w-24 rounded-md" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
