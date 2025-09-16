"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Helper to format enum values like 'FULL_TIME' into 'Full Time'
const formatLabel = (value: string) =>
  value
    .replace(/_/g, " ")
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    );

interface PreferenceChipGroupProps<T extends string> {
  options: readonly T[];
  value: T | T[] | null | undefined;
  onChange: (newValue: T | T[]) => void;
  mode: "single" | "multiple";
  className?: string;
}

export function PreferenceChipGroup<T extends string>({
  options,
  value,
  onChange,
  mode,
  className,
}: PreferenceChipGroupProps<T>) {
  const handleClick = (option: T) => {
    if (mode === "single") {
      onChange(option);
    } else {
      const currentValue = (value as T[] | undefined) || [];
      const newSelection = currentValue.includes(option)
        ? currentValue.filter((item) => item !== option)
        : [...currentValue, option];
      onChange(newSelection);
    }
  };

  const isSelected = (option: T) => {
    if (mode === "single") {
      return value === option;
    }
    return (value as T[] | undefined)?.includes(option) || false;
  };

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {options.map((option) => (
        <Button
          key={option}
          type="button"
          variant={isSelected(option) ? "default" : "outline"}
          onClick={() => handleClick(option)}
          className="rounded-full transition-all duration-200"
        >
          {formatLabel(option)}
        </Button>
      ))}
    </div>
  );
}
