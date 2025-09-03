import { Button } from "./ui/button";
import { Edit, GraduationCap, Trash2 } from "lucide-react";
import { Badge } from "./ui/badge";
import DeleteButton from "./DeleteButton";

type EducationCardProps = {
  id: string;
  course: string;
  institution: string;
  isComplete: boolean;
  finishedYear: number | null;
};

const EducationCard = ({
  id,
  course,
  institution,
  isComplete,
  finishedYear,
  onDelete,
}: EducationCardProps & { onDelete: (id: string) => void }) => {
  return (
    <div className="flex items-start justify-between gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg transition-shadow hover:shadow-sm">
      <div className="flex-shrink-0 pt-1">
        <GraduationCap className="h-6 w-6 text-purple-500" />
      </div>

      <div className="flex-grow space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {course}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {institution}
        </p>
        <div>
          {isComplete ? (
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
            >
              {finishedYear ? `Finished ${finishedYear}` : "Completed"}
            </Badge>
          ) : (
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
            >
              In Progress
            </Badge>
          )}
        </div>
      </div>

      <div className="flex-shrink-0 flex">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          aria-label="Edit education"
        >
          <Edit size={16} className="text-gray-500 dark:text-gray-400" />
        </Button>

        <DeleteButton title={course} onDelete={() => onDelete(id)} />
      </div>
    </div>
  );
};

export default EducationCard;
