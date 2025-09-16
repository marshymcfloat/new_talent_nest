"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import AddRoleForm from "@/components/AddRoleForm";
import AddEducationForm from "@/components/AddEducationForm";
import { CareerHistory, Education } from "@prisma/client";
import {
  AllLanguages,
  AllLocations,
  AllSkills,
  FullUserProfile,
  PreferenceEnums,
} from "./ProfileDataWrapper";

// Import the new section components
import ProfileSummarySection from "./sections/ProfileSummarySection";
import ProfileEducationSection from "./sections/ProfileEducationSection";
import ProfileResumeSection from "./sections/ProfileResumeSection";

import ProfileLanguagesSection from "./sections/ProfileLanguageSection";
import ProfileCareerSection from "./sections/ProfileCareerSectiont";
import ProfileSkillsSection from "./sections/ProfileSkillsSection";
import ProfilePreferencesSection from "./sections/ProfilePreferencesSection";

type SheetContentType =
  | "addRole"
  | "editRole"
  | "addEducation"
  | "editEducation"
  | null;

interface ProfileClientPageProps {
  initialProfileData: FullUserProfile;
  allLanguages: AllLanguages;
  allSkills: AllSkills;
  preferenceEnums: PreferenceEnums;
  allLocations: AllLocations;
}

const ProfileClientPage = ({
  initialProfileData,
  allLanguages,
  allSkills,
  allLocations,
  preferenceEnums,
}: ProfileClientPageProps) => {
  const router = useRouter();

  const [sheetContent, setSheetContent] = useState<SheetContentType>(null);
  const [educationUpdateData, setEducationUpdateData] =
    useState<Education | null>(null);
  const [careerHistoryUpdateData, setCareerHistoryUpdateData] =
    useState<CareerHistory | null>(null);

  const renderSheetTitle = () => {
    switch (sheetContent) {
      case "addRole":
        return "Add Career History";
      case "editRole":
        return "Edit Career History";
      case "addEducation":
        return "Add Education";
      case "editEducation":
        return "Edit Education";
      default:
        return "";
    }
  };

  const renderSheetContent = () => {
    const handleCancel = () => setSheetContent(null);
    switch (sheetContent) {
      case "addRole":
        return <AddRoleForm onCancel={handleCancel} />;
      case "editRole":
        return (
          <AddRoleForm onCancel={handleCancel} data={careerHistoryUpdateData} />
        );
      case "addEducation":
        return <AddEducationForm onCancel={handleCancel} />;
      case "editEducation":
        return (
          <AddEducationForm
            onCancel={handleCancel}
            data={educationUpdateData || undefined}
          />
        );
      default:
        return null;
    }
  };

  const handleAddCareer = () => {
    setCareerHistoryUpdateData(null);
    setSheetContent("addRole");
  };

  const handleEditCareer = (career: CareerHistory) => {
    setCareerHistoryUpdateData(career);
    setSheetContent("editRole");
  };

  const handleAddEducation = () => {
    setEducationUpdateData(null);
    setSheetContent("addEducation");
  };

  const handleEditEducation = (education: Education) => {
    setEducationUpdateData(education);
    setSheetContent("editEducation");
  };

  return (
    <>
      <Dialog open onOpenChange={(isOpen) => !isOpen && router.back()}>
        <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-3xl h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Your Profile</DialogTitle>
            <DialogDescription>
              Manage your career history, skills, and resume. This information
              helps employers find you.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto pr-4 -mr-4 space-y-8 py-4">
            <ProfileSummarySection
              initialSummary={initialProfileData.summary}
            />

            <ProfileCareerSection
              initialCareers={initialProfileData.previousCareers}
              onAdd={handleAddCareer}
              onEdit={handleEditCareer}
            />

            <ProfileEducationSection
              initialEducation={initialProfileData.education}
              onAdd={handleAddEducation}
              onEdit={handleEditEducation}
            />

            <ProfileLanguagesSection
              initialUserLanguages={initialProfileData.languages}
              allLanguages={allLanguages}
            />

            <ProfileSkillsSection
              initialUserSkills={initialProfileData.skills}
              allSkills={allSkills}
            />

            <ProfileResumeSection initialResumes={initialProfileData.resumes} />

            <ProfilePreferencesSection
              initialPreferences={initialProfileData}
              enums={preferenceEnums}
              allLocations={allLocations}
            />
          </div>
        </DialogContent>
      </Dialog>

      <Sheet
        open={!!sheetContent}
        onOpenChange={(isOpen) => !isOpen && setSheetContent(null)}
      >
        <SheetContent className="p-4">
          <SheetHeader>
            <SheetTitle>{renderSheetTitle()}</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">{renderSheetContent()}</div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProfileClientPage;
