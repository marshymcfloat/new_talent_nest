import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const ApplicantsPageSkeleton = () => {
  const skeletonRows = Array.from({ length: 5 });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-7 w-48" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 py-4">
          <Skeleton className="h-10 w-full max-w-sm rounded-md" />
          <Skeleton className="h-10 w-[280px] rounded-md" />
          <Skeleton className="h-10 w-[180px] rounded-md" />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30%]">Applicant</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead>Resume</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skeletonRows.map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex flex-col gap-1.5">
                        <Skeleton className="h-4 w-[100px]" />
                        <Skeleton className="h-3 w-[150px]" />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-[200px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-9 w-[150px] rounded-md" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-9 w-20 rounded-md" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-5 w-5 ml-auto" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end space-x-2 py-4">
          <Skeleton className="h-9 w-24 rounded-md" />
          <Skeleton className="h-9 w-24 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
};
