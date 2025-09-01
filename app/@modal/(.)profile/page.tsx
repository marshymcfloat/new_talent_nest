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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  addUserSummary,
  updateUserLanguages,
} from "@/lib/actions/profileActions";
import AddEducationForm from "@/components/AddEducationForm";
import EducationCard from "@/components/EducationCard";
import { Card, CardAction, CardHeader } from "@/components/ui/card";
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

type SheetContentType = "addRole" | "editRole" | "addEducation" | null;

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
  const summaryForm = useForm<SummaryFormValue>({
    resolver: zodResolver(summarySchema),
    defaultValues: { summary: "" },
  });

  const languageForm = useForm<LanguageFormValue>({
    resolver: zodResolver(languageSchema),
    defaultValues: { language: "" },
  });

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async (): Promise<ProfileData> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`
      );
      if (!response.ok) throw new Error("failed to fetch profile data");
      const data = await response.json();

      console.log(data);
      return data.data;
    },
  });

  useEffect(() => {
    if (profileData?.userLanguages && !isInitialLanguagesSet) {
      setAddedLanguage(profileData.userLanguages);
      setIsInitialLanguagesSet(true);
    }
  }, [profileData, isInitialLanguagesSet]);

  const handleAddLanguage = (language: Language) => {
    if (!addedLanguage.find((lang) => lang.id === language.id)) {
      setAddedLanguage((prev) => [...prev, language]);
    }
    languageForm.setValue("language", "");
    setLanguageSuggestion(null);
  };

  const renderSheetTitle = () => {
    switch (sheetContent) {
      case "addRole":
        return "Add Career History";
      case "editRole":
        return "Edit Career History";
      case "addEducation":
        return "Add Education";
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
      default:
        return null;
    }
  };

  const { mutate: mutateSummary, isPending: isSummaryPending } = useMutation({
    mutationFn: addUserSummary,
    onMutate: async (summaryFormData: FormData) => {
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
    onError: (_, __, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const { mutate: mutateLanguages, isPending: isLanguagesPending } =
    useMutation({
      mutationFn: updateUserLanguages,
      onMutate: async (newLanguages: Language[]) => {
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
        if (context?.previousProfile) {
          queryClient.setQueryData(["profile"], context.previousProfile);
        }
        toast.error("Failed to save languages", { description: err.message });
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["profile"] });
        setAddingLanguage(false);
        toast.success("Languages updated successfully!");
      },
    });

  const onSubmitSummary = async (values: SummaryFormValue) => {
    const formData = new FormData();
    formData.append("summary", values.summary);
    mutateSummary(formData);
    setEditingSummary(false);
  };

  const onSaveLanguages = () => {
    mutateLanguages(addedLanguage);
  };

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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setResumePreview(previewUrl);
    } else {
      setResumePreview(null);
    }
  };

  const handleCancel = () => {
    setIsAddingResume(false);
    setResumeFile(null);
    setResumePreview(null);
  };

  return (
    <>
      <Dialog
        open
        onOpenChange={(isOpen) => {
          if (!isOpen) router.back();
        }}
      >
        <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-3xl h-[90vh] flex flex-col">
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
                <form onSubmit={summaryForm.handleSubmit(onSubmitSummary)}>
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
                    {editingSummary ? (
                      <div className="space-y-4">
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
                      </div>
                    ) : (
                      <>
                        {profileData?.summary ? (
                          <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert">
                            <p>{profileData.summary}</p>
                          </div>
                        ) : (
                          <div className="text-center py-8 px-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
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
                          </div>
                        )}
                      </>
                    )}
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
                {isLoading ? (
                  <div className="flex justify-center items-center h-32">
                    <Spinner />
                  </div>
                ) : profileData?.previousCareers &&
                  profileData.previousCareers.length > 0 ? (
                  <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-10">
                    {profileData.previousCareers.map((career) => (
                      <CareerCard
                        key={career.id}
                        {...career}
                        description={career.description ?? undefined}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 px-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
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
                  </div>
                )}
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
                {isLoading ? (
                  <div className="flex justify-center items-center h-32">
                    <Spinner />
                  </div>
                ) : profileData?.education &&
                  profileData.education.length > 0 ? (
                  <div className="space-y-4">
                    {profileData.education.map((edu) => (
                      <EducationCard {...edu} key={edu.id} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 px-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
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
                  </div>
                )}
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
                    {addingLanguage ? (
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 p-2 rounded-md border border-gray-200 dark:border-gray-700 min-h-[48px]">
                          {addedLanguage?.length > 0 ? (
                            addedLanguage.map((lang) => (
                              <Badge
                                key={lang.id}
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
                            ))
                          ) : (
                            <p className="text-sm text-gray-500 dark:text-gray-400 px-2">
                              Add languages below.
                            </p>
                          )}
                        </div>

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
                          {languageSuggestion &&
                            languageSuggestion.length > 0 && (
                              <Card className="absolute top-full mt-1 z-10 w-full max-h-40 overflow-y-auto p-2 shadow-lg">
                                <ul className="flex flex-col gap-1">
                                  {languageSuggestion.map((l) => (
                                    <li
                                      key={l.id}
                                      className="p-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                                      onClick={() => handleAddLanguage(l)}
                                      onMouseDown={(e) => e.preventDefault()}
                                    >
                                      {l.name}
                                    </li>
                                  ))}
                                </ul>
                              </Card>
                            )}
                        </div>
                      </div>
                    ) : (
                      <>
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
                          <div className="text-center py-8 px-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <Globe className="mx-auto h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                              No languages added
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              List the languages you speak to connect with more
                              employers.
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
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {addingLanguage && (
                    <div className="flex justify-end gap-3 p-6 pt-0">
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
                    </div>
                  )}
                </form>
              </Form>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Resume
                </h2>
                {!isAddingResume && (
                  <Button
                    onClick={() => setIsAddingResume(true)}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <PlusCircle size={16} />
                    Add New Resume
                  </Button>
                )}
              </div>

              <div className="space-y-3">
                {profileData?.resumes.map((resume) => (
                  <div
                    key={resume.id}
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
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Delete resume"
                      >
                        <Trash2 className="h-5 w-5 text-red-500 hover:text-red-600" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {isAddingResume && (
                <div className="mt-4 pt-4">
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

                  {resumeFile && (
                    <div className="mt-4">
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
                    </div>
                  )}

                  <div className="mt-6 flex justify-end gap-3">
                    <Button variant="ghost" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button disabled={!resumeFile}>Save</Button>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">About your next role</h2>
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
