import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Edit } from "lucide-react";

const EducationCard = ({
  course,
  institution,
  isComplete,
  finishedYear,
}: {
  course: string;
  institution: string;
  isComplete: boolean;
  finishedYear: number | null;
}) => {
  return (
    <Card className="bg-purple-900/50">
      <CardHeader>
        <CardTitle>
          <h1>{course}</h1>
          <p>{institution}</p>
        </CardTitle>
        <CardAction>
          <button
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Edit career history"
          >
            <Edit size={16} />
          </button>
        </CardAction>
        <CardDescription className="text-white">
          {isComplete ? (
            finishedYear ? (
              `Finished ${finishedYear}`
            ) : (
              "Finished"
            )
          ) : (
            <p>In Progress</p>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default EducationCard;
