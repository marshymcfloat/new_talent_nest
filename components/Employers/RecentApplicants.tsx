import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { JobApplication, User } from "@prisma/client";

type ApplicationWithUser = JobApplication & {
  User: Pick<User, "name" | "email" | "image">;
};

interface RecentApplicantsProps {
  applications: ApplicationWithUser[];
}

export function RecentApplicants({ applications }: RecentApplicantsProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Applicants</CardTitle>
        <CardDescription>
          You have {applications.length} new applications this week.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {applications.map((app) => (
            <div key={app.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={app.User?.image ?? ""} alt="Avatar" />
                <AvatarFallback>
                  {app.User?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {app.User?.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {app.User?.email}
                </p>
              </div>
              <div className="ml-auto font-medium">
                +${app.id.substring(0, 4)}...
              </div>{" "}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
