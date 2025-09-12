import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDistanceToNow } from "date-fns";
import { Banknote, Bookmark, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import ApplyButton from "./ApplyButton";
import { Prisma } from "@prisma/client";
import { formatSalary } from "@/lib/utils";

type JobWithRelations = Prisma.JobGetPayload<{
  include: {
    company: true;
    questions: {
      include: {
        question: true;
      };
    };
  };
}>;

const JobDescription = ({
  company,
  createdAt,
  questions,
  id,
  location,
  qualifications,
  responsibilities,
  summary,
  title,
  type,
  minSalary,
  maxSalary,
}: JobWithRelations) => {
  return (
    <Card className="bg-card text-card-foreground  border-none md:border-border   flex flex-col p-4 rounded-t-2xl  md:fixed md:w-[58%] lg:w-[63%] h-fit  md:rounded-2xl">
      <CardHeader className="p-2">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-2xl font-bold text-foreground">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {company.name}
            </CardDescription>
          </div>

          <div className="w-full sm:w-[240px] flex flex-col sm:grid sm:grid-cols-2 gap-2 flex-shrink-0">
            <ApplyButton
              jobId={id}
              title={title}
              summary={summary}
              questions={questions}
              className="bg-purple-600 text-purple-foreground hover:bg-purple-600/90 dark:bg-purple-500 dark:hover:bg-purple-500/90"
            />
            <Button variant="outline" className="flex items-center gap-2">
              <Bookmark size={16} /> Save
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-2 pt-4 flex-grow overflow-y-auto flex flex-col gap-6">
        <div className="flex flex-col gap-3 text-foreground/80">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-muted-foreground" />
            <span>{type.replace("_", " ")}</span>
          </div>
          <div className="flex items-center gap-3">
            <Banknote size={18} className="text-muted-foreground" />
            <span>{`${minSalary ? formatSalary(minSalary) : ""}${
              minSalary && maxSalary ? "-" : ""
            }${maxSalary ? formatSalary(maxSalary) : ""}`}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Posted {formatDistanceToNow(createdAt, { addSuffix: true })}
          </p>
        </div>

        <hr className="border-border my-2" />

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed">{summary}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Responsibilities
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {responsibilities}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Qualifications
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {qualifications}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobDescription;
