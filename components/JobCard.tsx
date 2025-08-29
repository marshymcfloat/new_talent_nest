import React, { ComponentProps } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Bookmark } from "lucide-react";
import { Prisma } from "@prisma/client";
import { cn } from "@/lib/utils";

type JobWithQuestions = Prisma.JobGetPayload<{
  include: {
    employerQuestions: true;
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
        "cursor-pointer text-white/90 bg-gradient-to-tl from-zinc-900 to-purple-900",
        "border-2 border-transparent transition-all duration-300",
        "hover:border-fuchsia-400/50",
        {
          "border-fuchsia-400/80 shadow-lg ring-2 ring-fuchsia-400/30":
            selected,
        }
      )}
      {...rest}
    >
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg font-semibold leading-tight">
            {title}
          </CardTitle>
          <p className="text-sm text-white/60">{company}</p>
        </div>
        <button
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
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
        <p className="text-sm text-white/70 line-clamp-2">{summary}</p>
      </CardContent>
    </Card>
  );
};

export default JobCard;
