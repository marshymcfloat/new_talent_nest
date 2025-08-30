import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "./ui/card";
import { Edit } from "lucide-react";
import { format } from "date-fns"; // Import the format function

type CareerCardProps = {
  company: string;
  title: string;
  dateStarted: Date;
  dateEnded: Date | null;
  description?: string;
};

const CareerCard = ({
  company,
  title,
  dateStarted,
  dateEnded,
  description,
}: CareerCardProps) => {
  const startDateFormatted = format(new Date(dateStarted), "MMM yyyy");
  const endDateFormatted = dateEnded
    ? format(new Date(dateEnded), "MMM yyyy")
    : "Present";

  return (
    <Card className=" bg-purple-900/50">
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1  text-white">
            <p>{company}</p>

            <p className="text-sm">
              {startDateFormatted} - {endDateFormatted}
            </p>
          </CardDescription>

          {description && (
            <p className="text-white/80 text-sm pt-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <CardAction>
          <button
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Edit career history"
          >
            <Edit size={16} />
          </button>
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default CareerCard;
