"use client";

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
import { Button } from "@/components/ui/button";
import { ChangeEvent, useEffect, useState } from "react";
import {
  CareerHistory,
  Education,
  Language,
  Resume,
  User,
} from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import CareerCard from "@/components/CareerCard";
import { z } from "zod";
import Spinner from "@/components/Spinner";
import AddRoleForm from "@/components/AddRoleForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CareerCardProps } from "@/components/CareerCard";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  addUserResume,
  addUserSummary,
  deleteUserCareer,
  deleteUserEducation,
  deleteUserResume,
  updateUserLanguages,
} from "@/lib/actions/profileActions";
import AddEducationForm from "@/components/AddEducationForm";
import EducationCard from "@/components/EducationCard";
import { Card } from "@/components/ui/card";
import {
  Briefcase,
  ClipboardSignature,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Loader2,
  Pencil,
  PlusCircle,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { addResumeSchema } from "@/lib/zod schemas/profileSchema";
import DeleteButton from "@/components/DeleteButton";

const sectionFade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const placeholderFade = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const itemStaggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemStagger = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const summarySchema = z.object({
  summary: z
    .string()
    .min(6, { message: "Summary should have at least 6 characters." })
    .max(500, { message: "summary shoud not exceed 500 characters." }),
});
const languageSchema = z.object({
  language: z.string().optional(),
});

type SummaryFormValue = z.infer<typeof summarySchema>;
type LanguageFormValue = z.infer<typeof languageSchema>;
type ResumeFormValue = z.infer<typeof addResumeSchema>;

type SheetContentType =
  | "addRole"
  | "editRole"
  | "addEducation"
  | "editEducation"
  | null;

type ProfileData = Omit<User, "languages"> & {
  summary?: string;
  previousCareers: CareerHistory[];
  education: Education[];
  userLanguages: Language[];
  allLanguages: Language[];
  resumes: Resume[];
};

const InterceptedProfilePage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [editingSummary, setEditingSummary] = useState(false);
  const [sheetContent, setSheetContent] = useState<SheetContentType>(null);
  const [addingLanguage, setAddingLanguage] = useState(false);
  const [addedLanguage, setAddedLanguage] = useState<Language[]>([]);
  const [languageSuggestion, setLanguageSuggestion] = useState<
    Language[] | null
  >(null);
  const [isInitialLanguagesSet, setIsInitialLanguagesSet] = useState(false);
  const [isAddingResume, setIsAddingResume] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumePreview, setResumePreview] = useState<string | null>(null);
  const [educationUpdateData, setEducationUpdateData] =
    useState<Education | null>(null);
  const [careerHistoryUpdateData, setCareerHistoryUpdateData] =
    useState<CareerCardProps | null>(null);

  const summaryForm = useForm<SummaryFormValue>({
    resolver: zodResolver(summarySchema),
    defaultValues: { summary: "" },
  });

  const languageForm = useForm<LanguageFormValue>({
    resolver: zodResolver(languageSchema),
    defaultValues: { language: "" },
  });

  const resumeForm = useForm<ResumeFormValue>({
    resolver: zodResolver(addResumeSchema),
    defaultValues: {
      name: "",
      resume: undefined,
    },
  });

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async (): Promise<ProfileData> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`
      );
      if (!response.ok) throw new Error("failed to fetch profile data");
      const data = await response.json();
      return data.data;
    },
  });

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
    switch (sheetContent) {
      case "addRole":
        return <AddRoleForm onCancel={() => setSheetContent(null)} />;
      case "addEducation":
        return <AddEducationForm onCancel={() => setSheetContent(null)} />;
      case "editRole":
        return (
          <AddRoleForm
            onCancel={() => setSheetContent(null)}
            data={careerHistoryUpdateData}
          />
        );
      case "editEducation":
        return (
          <AddEducationForm
            onCancel={() => setSheetContent(null)}
            data={educationUpdateData || undefined}
          />
        );
      default:
        return null;
    }
  };

  const { mutate: mutateSummary, isPending: isSummaryPending } = useMutation({
    mutationFn: addUserSummary,
    onMutate: async (summaryFormData: FormData) => {
      setEditingSummary(false);

      await queryClient.cancelQueries({ queryKey: ["profile"] });
      const previousProfile = queryClient.getQueryData<ProfileData>([
        "profile",
      ]);
      const newSummary = summaryFormData.get("summary") as string;
      queryClient.setQueryData<ProfileData | undefined>(["profile"], (old) => {
        if (!old) return undefined;
        return { ...old, summary: newSummary };
      });
      return { previousProfile };
    },
    onError: (err, _, context) => {
      toast.error("Failed to update summary", { description: err.message });
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
    },
    onSuccess: () => {
      toast.success("Summary updated successfully!");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const { mutate: mutateLanguages, isPending: isLanguagesPending } =
    useMutation({
      mutationFn: updateUserLanguages,
      onMutate: async (newLanguages: Language[]) => {
        setAddingLanguage(false);
        await queryClient.cancelQueries({ queryKey: ["profile"] });
        const previousProfile = queryClient.getQueryData<ProfileData>([
          "profile",
        ]);
        queryClient.setQueryData<ProfileData | undefined>(
          ["profile"],
          (old) => {
            if (!old) return undefined;
            return { ...old, userLanguages: newLanguages };
          }
        );
        return { previousProfile };
      },
      onError: (err, _, context) => {
        toast.error("Failed to save languages", { description: err.message });
        if (context?.previousProfile) {
          queryClient.setQueryData(["profile"], context.previousProfile);
        }
      },
      onSuccess: () => {
        toast.success("Languages updated successfully!");
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      },
    });

  const { mutate: mutateResume, isPending: isUploadingResume } = useMutation({
    mutationFn: addUserResume,
    onMutate: async (newResumeData: FormData) => {
      setIsAddingResume(false);

      await queryClient.cancelQueries({ queryKey: ["profile"] });

      const previousProfile = queryClient.getQueryData<ProfileData>([
        "profile",
      ]);

      const resumeFile = newResumeData.get("resume") as File;
      const optimisticResume: Resume = {
        id: `temp-${Date.now()}`,
        title: newResumeData.get("name") as string,
        isPrimary: false,
        url: URL.createObjectURL(resumeFile),
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: previousProfile?.id || "",
        deletedAt: null,
      };

      queryClient.setQueryData<ProfileData | undefined>(["profile"], (old) => {
        if (!old) return undefined;
        return {
          ...old,
          resumes: [...old.resumes, optimisticResume],
        };
      });

      setResumeFile(null);
      setResumePreview(null);
      resumeForm.reset();

      return { previousProfile };
    },
    onError: (err, _, context) => {
      toast.error("Failed to add resume", { description: err.message });
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
    },
    onSuccess: () => {
      toast.success("Resume added successfully!");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const { mutate: mutateDeleteCareer, isPending } = useMutation({
    mutationFn: deleteUserCareer,
    onMutate: async (careerIdToDelete) => {
      await queryClient.cancelQueries({ queryKey: ["profile"] });

      const previousProfileData = queryClient.getQueryData<ProfileData>([
        "profile",
      ]);

      queryClient.setQueryData<ProfileData | undefined>(
        ["profile"],
        (oldData) => {
          if (!oldData) {
            return undefined;
          }

          const updatedCareers = oldData.previousCareers.filter(
            (career) => career.id !== careerIdToDelete
          );

          return { ...oldData, previousCareers: updatedCareers };
        }
      );
      return { previousProfileData };
    },

    onError: (error, variables, context) => {
      if (context?.previousProfileData) {
        queryClient.setQueryData<ProfileData>(
          ["profile"],
          context.previousProfileData
        );
      }
      toast.error("Failed to delete item. Please try again.");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const { mutate: mutateDeleteEducation, isPending: pendingDeleteEducation } =
    useMutation({
      mutationFn: deleteUserEducation,
      onMutate: async (educationIdToDelete: string) => {
        await queryClient.cancelQueries({ queryKey: ["profile"] });

        const previousProfileData = queryClient.getQueryData<ProfileData>([
          "profile",
        ]);

        queryClient.setQueryData<ProfileData | undefined>(
          ["profile"],
          (oldData) => {
            if (!oldData) return undefined;
            const updatedEducation = oldData.education.filter(
              (edu) => edu.id !== educationIdToDelete
            );
            return { ...oldData, education: updatedEducation };
          }
        );

        return { previousProfileData };
      },
      onError: (err, variables, context) => {
        toast.error("Failed to delete education record.", {
          description: err.message,
        });
        if (context?.previousProfileData) {
          queryClient.setQueryData(["profile"], context.previousProfileData);
        }
      },
      onSuccess: () => {
        toast.success("Education record deleted successfully!");
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      },
    });

  const { mutate: mutateDeleteResume, isPending: pendingDeleteResume } =
    useMutation({
      mutationFn: deleteUserResume,
      onMutate: async (resumeIdToDelete: string) => {
        await queryClient.cancelQueries({ queryKey: ["profile"] });

        const previousProfileData = queryClient.getQueryData<ProfileData>([
          "profile",
        ]);

        queryClient.setQueryData<ProfileData | undefined>(
          ["profile"],
          (oldData) => {
            if (!oldData) return undefined;
            const updatedResumes = oldData.resumes.filter(
              (resume) => resume.id !== resumeIdToDelete
            );
            return { ...oldData, resumes: updatedResumes };
          }
        );

        return { previousProfileData };
      },
      onError: (err, variables, context) => {
        toast.error("Failed to delete resume.", {
          description: (err as Error).message,
        });
        if (context?.previousProfileData) {
          queryClient.setQueryData(["profile"], context.previousProfileData);
        }
      },
      onSuccess: () => {
        toast.success("Resume deleted successfully!");
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      },
    });

  const languageInput = languageForm.watch("language");

  useEffect(() => {
    if (languageInput && profileData?.allLanguages) {
      const availableLanguages = profileData.allLanguages.filter(
        (serverLang) =>
          !addedLanguage.find((addedLang) => addedLang.id === serverLang.id)
      );
      const suggestionLanguage = availableLanguages.filter((language) =>
        language.name.toLowerCase().startsWith(languageInput.toLowerCase())
      );
      setLanguageSuggestion(suggestionLanguage);
    } else {
      setLanguageSuggestion(null);
    }
  }, [languageInput, profileData, addedLanguage]);

  useEffect(() => {
    if (!resumeFile) {
      setResumePreview(null);
      return;
    }
    const resumeURL = URL.createObjectURL(resumeFile);
    setResumePreview(resumeURL);
    return () => URL.revokeObjectURL(resumeURL);
  }, [resumeFile]);

  useEffect(() => {
    if (profileData?.userLanguages && !isInitialLanguagesSet) {
      setAddedLanguage(profileData.userLanguages);
      setIsInitialLanguagesSet(true);
    }
  }, [profileData, isInitialLanguagesSet]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
    if (file) {
      resumeForm.setValue("resume", file, { shouldValidate: true });
    } else {
      resumeForm.setValue("resume", undefined, { shouldValidate: true });
    }
  };

  const onSaveLanguages = () => {
    mutateLanguages(addedLanguage);
  };

  const handleCancel = () => {
    setIsAddingResume(false);
    setResumeFile(null);
    setResumePreview(null);
    resumeForm.reset();
  };

  const handleSubmissionSummary = async (values: SummaryFormValue) => {
    const formData = new FormData();
    formData.append("summary", values.summary);
    mutateSummary(formData);
  };

  const handleAddLanguage = (language: Language) => {
    if (!addedLanguage.find((lang) => lang.id === language.id)) {
      setAddedLanguage((prev) => [...prev, language]);
    }
    languageForm.setValue("language", "");
    setLanguageSuggestion(null);
  };

  const onSubmitResume = (values: ResumeFormValue) => {
    const newFormData = new FormData();
    newFormData.append("name", values.name);
    if (values.resume) {
      newFormData.append("resume", values.resume);
    }
    mutateResume(newFormData);
  };

  const handleCareerDeletion = (id: string) => {
    mutateDeleteCareer(id);
  };

  const onCareerUpdate = async (careerHistoryData: CareerCardProps) => {
    setSheetContent("editRole");
    setCareerHistoryUpdateData(careerHistoryData);
  };

  const handleEducationDeletion = (id: string) => {
    mutateDeleteEducation(id);
  };

  const handleResumeDeletion = (id: string) => {
    mutateDeleteResume(id);
  };

  const onEducationUpdate = async (educationData: Education) => {
    console.log("meow");
    setSheetContent("editEducation");
    setEducationUpdateData(educationData);
  };
  return (
    <>
      <Dialog
        open
        onOpenChange={(isOpen) => {
          if (!isOpen) router.back();
        }}
      >
        <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-3xl h-[90vh] flex flex-col  ">
          <DialogHeader>
            <DialogTitle>Your Profile</DialogTitle>
            <DialogDescription>
              Manage your career history, skills, and resume. This information
              helps employers find you.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto pr-4 -mr-4 space-y-8 py-4">
            <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
              <Form {...summaryForm}>
                <form
                  onSubmit={summaryForm.handleSubmit(handleSubmissionSummary)}
                >
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Personal Summary
                    </h2>
                    {!editingSummary && profileData?.summary && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          summaryForm.setValue(
                            "summary",
                            profileData?.summary || ""
                          );
                          setEditingSummary(true);
                        }}
                        aria-label="Edit Summary"
                      >
                        <Pencil className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      </Button>
                    )}
                  </div>

                  <div className="p-6">
                    <AnimatePresence mode="wait">
                      {editingSummary ? (
                        <motion.div
                          key="editing-summary"
                          variants={sectionFade}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="space-y-4"
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Highlight your unique experiences, ambitions, and
                            strengths. This is your elevator pitch to employers.
                          </p>
                          <FormField
                            name="summary"
                            control={summaryForm.control}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Textarea
                                    {...field}
                                    rows={5}
                                    placeholder="e.g., A highly motivated and detail-oriented professional with 5 years of experience in project management..."
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-end gap-3 pt-2">
                            <Button
                              type="button"
                              variant="ghost"
                              onClick={() => setEditingSummary(false)}
                            >
                              Cancel
                            </Button>
                            <Button type="submit" disabled={isSummaryPending}>
                              {isSummaryPending && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              )}
                              Save
                            </Button>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="display-summary"
                          variants={sectionFade}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          {profileData?.summary ? (
                            <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert">
                              <p>{profileData.summary}</p>
                            </div>
                          ) : (
                            <motion.div
                              key="add-summary-placeholder"
                              variants={placeholderFade}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="text-center py-8 px-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg"
                            >
                              <ClipboardSignature className="mx-auto h-12 w-12 text-gray-400" />
                              <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                                Add a personal summary
                              </h3>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                This is your chance to stand out from the crowd.
                              </p>
                              <div className="mt-6">
                                <Button
                                  type="button"
                                  onClick={() => setEditingSummary(true)}
                                >
                                  <PlusCircle className="mr-2 h-4 w-4" />
                                  Add Summary
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </Form>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Career History
                </h2>
                <Button
                  variant="outline"
                  onClick={() => setSheetContent("addRole")}
                  className="flex items-center gap-2"
                >
                  <PlusCircle size={16} />
                  Add Role
                </Button>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading-career"
                      className="flex justify-center items-center h-32"
                    >
                      <Spinner />
                    </motion.div>
                  ) : profileData?.previousCareers &&
                    profileData.previousCareers.length > 0 ? (
                    <motion.div
                      key="career-list"
                      variants={itemStaggerContainer}
                      initial="initial"
                      animate="animate"
                      className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-10"
                    >
                      {profileData.previousCareers.map((career) => (
                        <motion.div
                          key={career.id}
                          layout
                          variants={itemStagger}
                        >
                          <CareerCard
                            {...career}
                            onDelete={handleCareerDeletion}
                            onUpdate={onCareerUpdate}
                            description={career.description ?? undefined}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-career"
                      variants={placeholderFade}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="text-center py-8 px-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                        No career history added
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Showcase your experience by adding your past roles.
                      </p>
                      <div className="mt-6">
                        <Button onClick={() => setSheetContent("addRole")}>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Add Your First Role
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h2>
                <Button
                  variant="outline"
                  onClick={() => setSheetContent("addEducation")}
                  className="flex items-center gap-2"
                >
                  <PlusCircle size={16} />
                  Add Education
                </Button>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading-education"
                      className="flex justify-center items-center h-32"
                    >
                      <Spinner />
                    </motion.div>
                  ) : profileData?.education &&
                    profileData.education.length > 0 ? (
                    <motion.div
                      key="education-list"
                      variants={itemStaggerContainer}
                      initial="initial"
                      animate="animate"
                      className="space-y-4"
                    >
                      {profileData.education.map((edu) => (
                        <motion.div key={edu.id} layout variants={itemStagger}>
                          <EducationCard
                            onDelete={handleEducationDeletion}
                            onUpdate={onEducationUpdate}
                            {...edu}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-education"
                      variants={placeholderFade}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="text-center py-8 px-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <GraduationCap className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                        No education added
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Add your schools and degrees to build your profile.
                      </p>
                      <div className="mt-6">
                        <Button onClick={() => setSheetContent("addEducation")}>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Add Your Education
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
              <Form {...languageForm}>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Languages
                    </h2>
                    {!addingLanguage &&
                      profileData &&
                      profileData?.userLanguages?.length > 0 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => setAddingLanguage(true)}
                          aria-label="Edit Languages"
                        >
                          <Pencil className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </Button>
                      )}
                  </div>

                  <div className="p-6">
                    <AnimatePresence mode="wait">
                      {addingLanguage ? (
                        <motion.div
                          key="editing-languages"
                          variants={sectionFade}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="space-y-4"
                        >
                          <motion.div
                            layout
                            className="flex flex-wrap gap-2 p-2 rounded-md border border-gray-200 dark:border-gray-700 min-h-[48px]"
                          >
                            <AnimatePresence>
                              {addedLanguage?.length > 0 ? (
                                addedLanguage.map((lang) => (
                                  <motion.div
                                    key={lang.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                  >
                                    <Badge
                                      variant="secondary"
                                      className="flex items-center gap-2 text-sm py-1"
                                    >
                                      <span>{lang.name}</span>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setAddedLanguage(
                                            addedLanguage.filter(
                                              (l) => l.id !== lang.id
                                            )
                                          )
                                        }
                                        className="rounded-full hover:bg-gray-500/20"
                                        aria-label={`Remove ${lang.name}`}
                                      >
                                        <X size={14} />
                                      </button>
                                    </Badge>
                                  </motion.div>
                                ))
                              ) : (
                                <p className="text-sm text-gray-500 dark:text-gray-400 px-2">
                                  Add languages below.
                                </p>
                              )}
                            </AnimatePresence>
                          </motion.div>
                          <div className="relative">
                            <FormField
                              control={languageForm.control}
                              name="language"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Add a language</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder="e.g., Spanish"
                                      autoComplete="off"
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            <AnimatePresence>
                              {languageSuggestion &&
                                languageSuggestion.length > 0 && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full mt-1 z-10 w-full"
                                  >
                                    <Card className="max-h-40 overflow-y-auto p-2 shadow-lg">
                                      <ul className="flex flex-col gap-1">
                                        {languageSuggestion.map((l) => (
                                          <li
                                            key={l.id}
                                            className="p-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                                            onClick={() => handleAddLanguage(l)}
                                            onMouseDown={(e) =>
                                              e.preventDefault()
                                            }
                                          >
                                            {l.name}
                                          </li>
                                        ))}
                                      </ul>
                                    </Card>
                                  </motion.div>
                                )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="display-languages"
                          variants={sectionFade}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          {profileData?.userLanguages &&
                          profileData.userLanguages.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {profileData.userLanguages.map((lang) => (
                                <Badge
                                  variant="secondary"
                                  key={lang.id}
                                  className="text-sm py-1"
                                >
                                  {lang.name}
                                </Badge>
                              ))}
                            </div>
                          ) : (
                            <motion.div
                              key="no-languages"
                              variants={placeholderFade}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="text-center py-8 px-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg"
                            >
                              <Globe className="mx-auto h-12 w-12 text-gray-400" />
                              <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                                No languages added
                              </h3>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                List the languages you speak to connect with
                                more employers.
                              </p>
                              <div className="mt-6">
                                <Button
                                  type="button"
                                  onClick={() => setAddingLanguage(true)}
                                >
                                  <PlusCircle className="mr-2 h-4 w-4" />
                                  Add Languages
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {addingLanguage && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-end gap-3 p-6 pt-0"
                    >
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => {
                          setAddingLanguage(false);
                          setAddedLanguage(profileData?.userLanguages || []);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        onClick={onSaveLanguages}
                        disabled={isLanguagesPending}
                      >
                        {isLanguagesPending && (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Save
                      </Button>
                    </motion.div>
                  )}
                </form>
              </Form>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Resume
                </h2>
                <AnimatePresence>
                  {!isAddingResume && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <Button
                        onClick={() => setIsAddingResume(true)}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <PlusCircle size={16} />
                        Add New Resume
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-3">
                {profileData?.resumes.map((resume) => (
                  <motion.div
                    key={resume.id}
                    layout
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="text-purple-500" size={24} />
                      <span className="font-medium text-gray-800 dark:text-gray-100">
                        {resume.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="View resume"
                      >
                        <Eye className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      </Button>

                      <DeleteButton
                        title={resume.title}
                        onDelete={() => handleResumeDeletion(resume.id)}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {isAddingResume && (
                  <motion.div
                    key="add-resume-form"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 overflow-hidden"
                  >
                    <Form {...resumeForm}>
                      <form
                        onSubmit={resumeForm.handleSubmit(onSubmitResume)}
                        className="space-y-6"
                      >
                        <FormField
                          control={resumeForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Resume Title</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., Senior Developer Resume"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={resumeForm.control}
                          name="resume"
                          render={({ fieldState }) => (
                            <FormItem>
                              <FormLabel>Resume File</FormLabel>
                              <FormControl>
                                <label
                                  htmlFor="resume-upload"
                                  className="relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                >
                                  <UploadCloud className="h-12 w-12 text-gray-400" />
                                  <span className="mt-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    <span className="text-purple-600 dark:text-purple-400">
                                      Click to upload
                                    </span>{" "}
                                    or drag and drop
                                  </span>
                                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    PDF (MAX. 5MB)
                                  </p>
                                  <Input
                                    id="resume-upload"
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                  />
                                </label>
                              </FormControl>
                              {fieldState.error && (
                                <p className="text-sm font-medium text-destructive">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </FormItem>
                          )}
                        />

                        <AnimatePresence>
                          {resumeFile && (
                            <motion.div
                              key="resume-preview"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 overflow-hidden"
                            >
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Preview: {resumeFile.name}
                              </p>
                              {resumePreview && (
                                <iframe
                                  src={resumePreview}
                                  title={resumeFile.name}
                                  className="w-full h-96 rounded-md border border-gray-300 dark:border-gray-600"
                                />
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="flex justify-end gap-3">
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={handleCancel}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" disabled={isUploadingResume}>
                            {isUploadingResume && (
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Save
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="">
              <h1>About your next role</h1>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Sheet
        open={!!sheetContent}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSheetContent(null);
        }}
      >
        <SheetContent className="p-4">
          <SheetHeader>
            <SheetTitle>{renderSheetTitle()}</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">{renderSheetContent()}</div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default InterceptedProfilePage;
