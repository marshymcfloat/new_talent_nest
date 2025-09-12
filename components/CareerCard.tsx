"use client";

import { Button } from "./ui/button";
import { Edit, Building2, CalendarDays } from "lucide-react";
import { format } from "date-fns";
import DeleteButton from "./DeleteButton";
import { CareerHistory } from "@prisma/client";

export type CareerCardProps = CareerHistory & {
  onDelete: (id: string) => void;

  onUpdate: (careerHistoryData: CareerHistory) => void;
};

const CareerCard = ({ onDelete, onUpdate, ...careerData }: CareerCardProps) => {
  const startDateFormatted = format(careerData.dateStarted, "MMM yyyy");
  const endDateFormatted = careerData.dateEnded
    ? format(careerData.dateEnded, "MMM yyyy")
    : "Present";

  return (
    <div className="relative pl-10">
      <div className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 ring-4 ring-white dark:ring-gray-800"></div>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {careerData.title}
          </h3>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              aria-label="Edit career history"
              onClick={() => onUpdate(careerData)}
            >
              <Edit size={16} className="text-gray-500 dark:text-gray-400" />
            </Button>
            <DeleteButton
              title={careerData.title}
              onDelete={() => onDelete(careerData.id)}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-x-5 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Building2 size={14} />
            <span>{careerData.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays size={14} />
            <span>
              {startDateFormatted} - {endDateFormatted}
            </span>
          </div>
        </div>

        {careerData.description && (
          <p className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300 pt-2">
            {careerData.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CareerCard;
