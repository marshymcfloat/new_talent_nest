import React, { ComponentProps } from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Job } from "@prisma/client";
import { Bookmark, X } from "lucide-react";
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
}: Job & { selected: string | undefined } & ComponentProps<"div">) => {
  return (
    <Card
      className={`lg:min-w-[200px] border-2 ${selected === title && "border-blue-400 transition-all duration-150 shadow-md"} `}
      {...rest}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex flex-col gap-2">
          <p>{company}</p>

          <p className="capitalize max-h-[100px]">{summary}</p>
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
