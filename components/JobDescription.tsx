import { Job } from "@prisma/client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDistanceToNow } from "date-fns";
import { Banknote, Bookmark, Building, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import ApplyButton from "./ApplyButton";
import { JobWithQuestions } from "@/lib/types/jobTypes";

const JobDescription = ({
  benefits,
  company,
  createdAt,
  employerQuestions,
  id,
  jobClass,
  location,
  qualifications,
  responsibilities,
  salary,
  summary,
  tags,
  title,
  type,
  updatedAt,
}: JobWithQuestions) => {
  return (
    <Card className="lg:fixed mr-8 bg-gradient-to-tl from-bg-zinc-900 text-white/80 to-purple-900 border-none">
      <CardHeader>
        <CardTitle className="capitalize lg:text-3xl">{title}</CardTitle>
        <CardDescription className="flex  text-white/80 flex-col gap-2 ">
          <h3 className="font-medium">{company}</h3>
          <div className="flex flex-col ">
            <p className="flex gap-4 items-center">
              <MapPin size={16} /> {location}
            </p>
            <p className="flex gap-4 items-center">
              <Clock size={16} /> {type}
            </p>
            <p className="flex gap-4 items-center">
              <Banknote size={16} /> {salary}
            </p>
          </div>
          <p className="flex gap-4 items-center">
            posted <span>{formatDistanceToNow(createdAt)} ago</span>
          </p>
        </CardDescription>
        <CardAction className="flex gap-4">
          <ApplyButton
            jobId={id}
            title={title}
            summary={summary}
            questions={employerQuestions}
          />

          <Button className="flex items-center bg-blue-400 hover:bg-blue-400/80 cursor-pointer gap-2 min-w-[120px]">
            <Bookmark /> Save
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="">
          <h1 className="font-medium">Summary:</h1>
          <p className="">{summary}</p>
        </div>
        <div className="">
          <h1 className="font-medium">Responsibilities</h1>
          <p>{responsibilities}</p>
        </div>
        <div className="">
          <h1 className="font-medium">Qualifications:</h1>
          <p>{qualifications}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobDescription;
