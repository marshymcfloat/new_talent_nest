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
import { useEffect, useState } from "react";
import { CareerHistory, Education, Language, User } from "@prisma/client";
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
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
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
            {/* --- 3. USE THE DEDICATED `summaryForm` HERE --- */}
            <div className="space-y-2">
              <Form {...summaryForm}>
                <form
                  action=""
                  onSubmit={summaryForm.handleSubmit(onSubmitSummary)}
                  className="flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Personal Summary</h2>
                    {!editingSummary && (
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => {
                          summaryForm.setValue(
                            "summary",
                            profileData?.summary || ""
                          );
                          setEditingSummary(true);
                        }}
                      >
                        {profileData?.summary ? "Edit" : "Add Summary"}
                      </Button>
                    )}
                  </div>
                  {editingSummary ? (
                    <>
                      <p className="text-sm text-muted-foreground">
                        Highlight your unique experiences, ambitions and
                        strengths.
                      </p>
                      <FormField
                        name="summary"
                        control={summaryForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          type="submit"
                          disabled={isSummaryPending}
                        >
                          {isSummaryPending && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          )}{" "}
                          Save
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setEditingSummary(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      {profileData?.summary ? (
                        <p className="font-light">{profileData.summary}</p>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          You haven&apos;t added a summary yet.
                        </p>
                      )}
                    </>
                  )}
                </form>
              </Form>
            </div>

            <div className="space-y-4 flex flex-col">
              <h2 className="text-xl font-semibold">Career History</h2>
              {isLoading ? (
                <Spinner className="m-4" />
              ) : profileData?.previousCareers &&
                profileData.previousCareers.length > 0 ? (
                profileData.previousCareers.map((c) => (
                  <CareerCard
                    {...c}
                    description={c.description ?? undefined}
                    key={c.id}
                  />
                ))
              ) : (
                <p>no career history</p>
              )}
              <Button
                variant={"outline"}
                className="max-w-[120px]"
                onClick={() => setSheetContent("addRole")}
              >
                Add Role
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Education History</h2>
              <div className="space-y-4 flex flex-col">
                {isLoading ? (
                  <Spinner className="animate-spin" />
                ) : profileData?.education &&
                  profileData.education.length > 0 ? (
                  profileData.education.map((e) => (
                    <EducationCard {...e} key={e.id} />
                  ))
                ) : (
                  <Card className="flex justify-center items-center p-4">
                    <h1 className="font-bold">No Educational history</h1>
                  </Card>
                )}
              </div>
              <Button
                className="max-w-[120px]"
                variant={"outline"}
                onClick={() => setSheetContent("addEducation")}
              >
                Add Education
              </Button>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Languages</h2>
              <div className="flex flex-wrap gap-2 min-h-[24px]">
                {addedLanguage?.map((lang) => (
                  <Badge variant="secondary" key={lang.id}>
                    {lang.name}
                  </Badge>
                ))}
              </div>
              {addingLanguage ? (
                <>
                  <Form {...languageForm}>
                    <form
                      action=""
                      className="relative"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <FormField
                        control={languageForm.control}
                        name="language"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Language</FormLabel>
                            <FormControl>
                              <Input {...field} autoComplete="off" />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      {languageSuggestion && languageSuggestion.length > 0 && (
                        <Card className="absolute top-full mt-1 z-10 w-full max-h-[150px] overflow-y-auto p-2">
                          <div className="flex flex-wrap gap-2">
                            {languageSuggestion.map((l) => (
                              <Badge
                                key={l.id}
                                variant="secondary"
                                className="cursor-pointer"
                                onClick={() => handleAddLanguage(l)}
                              >
                                {l.name}
                              </Badge>
                            ))}
                          </div>
                        </Card>
                      )}
                    </form>
                  </Form>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={"outline"}
                      onClick={onSaveLanguages}
                      disabled={isLanguagesPending}
                    >
                      {isLanguagesPending && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}{" "}
                      Save
                    </Button>
                    <Button
                      variant={"ghost"}
                      onClick={() => {
                        setAddingLanguage(false);
                        setAddedLanguage(profileData?.userLanguages || []);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => setAddingLanguage(true)}
                >
                  Add Language
                </Button>
              )}
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Resume</h2>
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
