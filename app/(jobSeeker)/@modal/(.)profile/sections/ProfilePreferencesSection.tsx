"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { User } from "@prisma/client";
import { updateUserPreferences } from "@/lib/actions/profileActions";
import { Button } from "@/components/ui/button";
import { Loader2, Pencil } from "lucide-react";
import { PreferenceEnums } from "../ProfileDataWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PreferenceChipGroup } from "./PreferenceChipGroup"; // Import our new component

type EditableField =
  | "availability"
  | "workTypes"
  | "locations"
  | "rightToWork"
  | "salary"
  | "classification"
  | "approachability";

const EditorWrapper = ({
  onSave,
  onCancel,
  isPending,
  children,
}: {
  onSave: () => void;
  onCancel: () => void;
  isPending: boolean;
  children: React.ReactNode;
}) => (
  <div className="py-4 space-y-4">
    {children}
    <div className="flex justify-end gap-2 pt-2">
      <Button variant="ghost" onClick={onCancel} disabled={isPending}>
        Cancel
      </Button>
      <Button onClick={onSave} disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Save
      </Button>
    </div>
  </div>
);

const DisplayField = ({
  label,
  children,
  onEdit,
}: {
  label: string;
  children: React.ReactNode;
  onEdit: () => void;
}) => (
  <div className="py-4">
    <div className="flex justify-between items-center">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
        {label}
      </h4>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onEdit}>
        <Pencil size={16} className="text-gray-500" />
      </Button>
    </div>
    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {children}
    </div>
  </div>
);

const formatEnum = (value: string) =>
  value
    .replace(/_/g, " ")
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    );

const ProfilePreferencesSection = ({
  initialPreferences,
  enums,
}: {
  initialPreferences: Partial<User>;
  enums: PreferenceEnums;
}) => {
  const queryClient = useQueryClient();
  const [editingField, setEditingField] = useState<EditableField | null>(null);

  const [availability, setAvailability] = useState(
    initialPreferences.availability
  );
  const [workTypes, setWorkTypes] = useState(
    initialPreferences.preferredWorkTypes || []
  );
  const [locations, setLocations] = useState(
    (initialPreferences.preferredLocation || []).join("\n")
  );
  const [rightToWork, setRightToWork] = useState(
    (initialPreferences.rightToWork || []).join("\n")
  );
  const [salary, setSalary] = useState(initialPreferences.expectedSalary || "");
  const [classification, setClassification] = useState(
    initialPreferences.jobClassification || []
  );
  const [approachability, setApproachability] = useState(
    initialPreferences.approachability
  );

  const { mutate, isPending } = useMutation({
    mutationFn: updateUserPreferences,
    onSuccess: () => {
      toast.success("Preferences updated!");
      queryClient.invalidateQueries({ queryKey: ["profileData"] });
      setEditingField(null);
    },
    onError: (err) =>
      toast.error("Failed to update preferences", { description: err.message }),
  });

  const handleSave = (field: EditableField) => {
    switch (field) {
      case "availability":
        mutate({ availability });
        break;
      case "workTypes":
        mutate({ preferredWorkTypes: workTypes });
        break;
      case "locations":
        mutate({
          preferredLocation: locations
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean),
        });
        break;
      case "rightToWork":
        mutate({
          rightToWork: rightToWork
            .split("\n")
            .map((r) => r.trim())
            .filter(Boolean),
        });
        break;
      case "salary":
        mutate({ expectedSalary: salary });
        break;
      case "classification":
        mutate({ jobClassification: classification });
        break;
      case "approachability":
        mutate({ approachability });
        break;
    }
  };

  const renderEditor = () => {
    const commonProps = {
      onCancel: () => setEditingField(null),
      isPending: isPending,
    };
    switch (editingField) {
      case "availability":
        return (
          <EditorWrapper
            onSave={() => handleSave("availability")}
            {...commonProps}
          >
            <PreferenceChipGroup
              mode="single"
              options={enums.availabilityTypes}
              value={availability}
              onChange={(v) => setAvailability(v as any)}
            />
          </EditorWrapper>
        );
      case "workTypes":
        return (
          <EditorWrapper
            onSave={() => handleSave("workTypes")}
            {...commonProps}
          >
            <PreferenceChipGroup
              mode="multiple"
              options={enums.jobTypes}
              value={workTypes}
              onChange={(v) => setWorkTypes(v as any)}
            />
          </EditorWrapper>
        );
      case "classification":
        return (
          <EditorWrapper
            onSave={() => handleSave("classification")}
            {...commonProps}
          >
            <PreferenceChipGroup
              mode="multiple"
              options={enums.jobClasses}
              value={classification}
              onChange={(v) => setClassification(v as any)}
            />
          </EditorWrapper>
        );
      case "approachability":
        return (
          <EditorWrapper
            onSave={() => handleSave("approachability")}
            {...commonProps}
          >
            <PreferenceChipGroup
              mode="single"
              options={enums.approachabilityTypes}
              value={approachability}
              onChange={(v) => setApproachability(v as any)}
            />
          </EditorWrapper>
        );
      // Text-based inputs remain the same
      case "locations":
        return (
          <EditorWrapper
            onSave={() => handleSave("locations")}
            {...commonProps}
          >
            <Label htmlFor="locations">Enter one location per line</Label>
            <Textarea
              id="locations"
              value={locations}
              onChange={(e) => setLocations(e.target.value)}
              rows={5}
            />
          </EditorWrapper>
        );
      case "rightToWork":
        return (
          <EditorWrapper
            onSave={() => handleSave("rightToWork")}
            {...commonProps}
          >
            <Label htmlFor="rightToWork">
              Enter one item per line (e.g., "Philippines", "Philippines
              Citizen")
            </Label>
            <Textarea
              id="rightToWork"
              value={rightToWork}
              onChange={(e) => setRightToWork(e.target.value)}
              rows={3}
            />
          </EditorWrapper>
        );
      case "salary":
        return (
          <EditorWrapper onSave={() => handleSave("salary")} {...commonProps}>
            <Label htmlFor="salary">
              Salary expectation (e.g., "PHP 80,000/month")
            </Label>
            <Input
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </EditorWrapper>
        );
      default:
        return null;
    }
  };

  const renderDisplay = () => (
    <>
      <DisplayField
        label="Availability"
        onEdit={() => setEditingField("availability")}
      >
        <p>
          {initialPreferences.availability
            ? formatEnum(initialPreferences.availability)
            : "Not specified"}
        </p>
      </DisplayField>
      <DisplayField
        label="Preferred work types"
        onEdit={() => setEditingField("workTypes")}
      >
        <p>
          {initialPreferences.preferredWorkTypes?.length
            ? initialPreferences.preferredWorkTypes.map(formatEnum).join(", ")
            : "Not specified"}
        </p>
      </DisplayField>
      <DisplayField
        label="Preferred locations"
        onEdit={() => setEditingField("locations")}
      >
        {initialPreferences.preferredLocation?.length ? (
          <ul className="list-none space-y-1">
            {initialPreferences.preferredLocation.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        ) : (
          <p>Not specified</p>
        )}
      </DisplayField>
      <DisplayField
        label="Right to work"
        onEdit={() => setEditingField("rightToWork")}
      >
        {initialPreferences.rightToWork?.length ? (
          <ul className="list-none space-y-1">
            {initialPreferences.rightToWork.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        ) : (
          <p>Not specified</p>
        )}
      </DisplayField>
      <DisplayField
        label="Salary expectation"
        onEdit={() => setEditingField("salary")}
      >
        <p>{initialPreferences.expectedSalary || "Not specified"}</p>
      </DisplayField>
      <DisplayField
        label="Classification of interest"
        onEdit={() => setEditingField("classification")}
      >
        {initialPreferences.jobClassification?.length ? (
          <ul className="list-none space-y-1">
            {initialPreferences.jobClassification.map((c) => (
              <li key={c}>{formatEnum(c)}</li>
            ))}
          </ul>
        ) : (
          <p>Not specified</p>
        )}
      </DisplayField>
      <DisplayField
        label="Approachability"
        onEdit={() => setEditingField("approachability")}
      >
        <p>
          {initialPreferences.approachability
            ? formatEnum(initialPreferences.approachability)
            : "Not specified"}
        </p>
      </DisplayField>
    </>
  );

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold p-6 border-b">About your next role</h2>
      <div className="px-6 divide-y">
        {editingField ? renderEditor() : renderDisplay()}
      </div>
    </div>
  );
};

export default ProfilePreferencesSection;
