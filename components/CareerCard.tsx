import { CareerHistory } from "@prisma/client";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Edit } from "lucide-react";

type CareerCardProps = {
  company: string;
  title: string;

  id?: string;
  dateStarted: Date;
  dateEnded: Date;
};

const CareerCard = ({
  company,
  id,
  title,
  dateStarted,
  dateEnded,
}: CareerCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <p>{company}</p>
          <p>
            {dateStarted.toLocaleDateString()} -{" "}
            {dateEnded.toLocaleDateString()}
          </p>
        </CardDescription>
        <CardAction>
          <Edit size={16} className="cursor-pointer" />
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default CareerCard;
