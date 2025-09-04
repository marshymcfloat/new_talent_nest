import React, { ComponentProps } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Bookmark } from "lucide-react";
import { Prisma } from "@prisma/client";
import { cn } from "@/lib/utils";

type JobWithQuestions = Prisma.JobGetPayload<{
  include: {
    employerQuestions: true;
    company: true;
  };
}>;

interface JobCardProps
  extends JobWithQuestions,
    Omit<ComponentProps<"div">, "id" | "title"> {
  selected: boolean;
}

const JobCard = ({
  company,
  summary,
  title,
  selected,
  id,
  jobClass,
  location,
  type,
  salary,
  qualifications,
  responsibilities,
  benefits,
  employerQuestions,
  tags,
  createdAt,
  updatedAt,

  ...rest
}: JobCardProps) => {
  return (
    <Card
      className={cn(
        "cursor-pointer bg-card text-card-foreground border-2 border-transparent",
        "transition-all duration-300 group",

        "hover:border-purple-500/30",

        {
          "border-purple-500 shadow-lg ring-2 ring-purple-500/20": selected,
        }
      )}
      {...rest}
    >
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg font-semibold leading-tight text-foreground">
            {title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{company.name}</p>
        </div>
        <button
          className={cn(
            "p-2 rounded-full text-muted-foreground",
            "hover:bg-accent hover:text-purple-500 transition-colors"
          )}
          aria-label="Save job"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Bookmark clicked for job:", id);
          }}
        >
          <Bookmark size={20} />
        </button>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{summary}</p>
      </CardContent>
    </Card>
  );
};

export default JobCard;
