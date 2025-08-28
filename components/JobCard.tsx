import React, { ComponentProps } from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Bookmark, X } from "lucide-react";
import { JobWithQuestions } from "@/lib/types/jobTypes";
const JobCard = ({
  company,
  createdAt,
  id,
  jobClass,
  location,
  salary,
  title,
  type,
  benefits,
  employerQuestions,
  qualifications,
  responsibilities,
  summary,
  tags,
  updatedAt,
  selected,
  ...rest
}: JobWithQuestions & {
  selected: string | undefined;
} & ComponentProps<"div">) => {
  return (
    <Card
      className={`lg:min-w-[200px]  text-white/90 bg-gradient-to-tl from-bg-zinc-900 to-purple-900 border-2 border-purple-900 ${selected === title && "border-fuchsia-400/50 transition-all duration-500 shadow-xl "} `}
      {...rest}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex  text-white/60 flex-col gap-2">
          <p>{company}</p>

          <p className="capitalize">{summary}</p>
        </CardDescription>
        <CardAction className="flex flex-col gap-2">
          <Bookmark size={20} />
          <X size={20} />
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default JobCard;
