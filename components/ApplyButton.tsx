"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { signIn, useSession } from "next-auth/react";
import { Loader2, XIcon } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { createApplicationSchema } from "@/lib/zod schemas/applicationSchema";
import { submitApplication } from "@/lib/actions/applicationActions";
import { EmployerQuestion, Resume, User } from "@prisma/client";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";

type UserWithResume = User & {
  resumes: Resume[];
  lastUsedResumeId: string | null;
};

const fetchProfileData = async (): Promise<UserWithResume> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch profile information.");
  }
  const result = await response.json();
  return result.data;
};

const ApplyButton = ({
  title,
  questions,
  summary,
  jobId,
  className,
}: {
  jobId: string;
  title: string;
  summary: string;
  questions: EmployerQuestion[];
  className: string;
}) => {
  const { status } = useSession();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const {
    data: profileData,
    isLoading: isProfileLoading,
    isError: isProfileError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfileData,
    enabled: isSheetOpen && status === "authenticated",
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const inputStyles =
    "bg-zinc-800/50 border-purple-600/50 focus-visible:ring-purple-500 text-white/90 placeholder:text-zinc-400";

  const applicationSchema = createApplicationSchema(questions);
  type ApplicationFormValues = z.infer<typeof applicationSchema>;

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      resume: undefined,
      answers: questions.reduce((acc, q) => ({ ...acc, [q.id]: "" }), {}),
    },
    mode: "onChange",
  });

  const { mutate: applyToJob, isPending: isSubmitting } = useMutation({
    mutationFn: submitApplication,
    onSuccess: (response) => {
      if (response?.error) {
        toast.error("Submission Failed", { description: response.error });
        return;
      }
      toast.success("Application submitted successfully!", {
        description: "The employer will be in touch if you're a good fit.",
      });
      form.reset();
      setIsSheetOpen(false);
    },
    onError: (error) => {
      toast.error("Submission Failed", {
        description: error.message || "An unexpected error occurred.",
      });
    },
  });

  useEffect(() => {
    if (profileData) {
      const { lastUsedResumeId, resumes } = profileData;
      const lastResumeIsActive =
        lastUsedResumeId && resumes.some((r) => r.id === lastUsedResumeId);

      if (lastResumeIsActive) {
        form.setValue("resume", lastUsedResumeId, {
          shouldValidate: true,
        });
      }
    }
  }, [profileData, form]);

  const resumeValue = form.watch("resume");

  function onSubmit(data: ApplicationFormValues) {
    const formData = new FormData();
    formData.append("jobId", jobId);

    if (typeof data.resume === "string") {
      formData.append("resumeId", data.resume);
    } else if (data.resume instanceof File) {
      formData.append("resume", data.resume);
    }
    formData.append("answers", JSON.stringify(data.answers));
    applyToJob(formData);
  }

  return (
    <>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        {status === "unauthenticated" ? (
          <Button
            className={cn(
              "w-full bg-purple-700 hover:bg-purple-700/80",
              className
            )}
            onClick={() => signIn()}
          >
            Apply
          </Button>
        ) : (
          <SheetTrigger asChild>
            <Button
              className={cn(
                "w-full bg-purple-700 hover:bg-purple-700/80",
                className
              )}
            >
              Apply
            </Button>
          </SheetTrigger>
        )}

        <SheetContent className="bg-zinc-900 border-l-purple-700/50 text-white/90 p-4 sm:p-6 overflow-y-auto w-[90vw] sm:max-w-xl">
          <SheetHeader>
            <SheetTitle className="text-white text-2xl">
              Apply for {title}
            </SheetTitle>
            <SheetDescription className="text-zinc-400">
              {summary}
            </SheetDescription>
          </SheetHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-6 space-y-6"
            >
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80">
                      Resume <span className="text-red-500">*</span>
                    </FormLabel>
                    <div className="pt-2">
                      {isProfileLoading && (
                        <div className="flex items-center text-zinc-400">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Loading your resumes...</span>
                        </div>
                      )}
                      {isProfileError && (
                        <p className="text-sm text-red-500">
                          Could not load your profile. Please close and try
                          again.
                        </p>
                      )}
                      {profileData && (
                        <div className="space-y-4">
                          {profileData.resumes.length > 0 ? (
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-zinc-400">
                                Select a saved resume:
                              </p>
                              {profileData.resumes.map((resume) => (
                                <button
                                  type="button"
                                  key={resume.id}
                                  onClick={() => field.onChange(resume.id)}
                                  className={cn(
                                    "w-full text-start p-3 hover:bg-purple-900/40 duration-150 transition-all cursor-pointer rounded-md border",
                                    resumeValue === resume.id
                                      ? "border-purple-500 bg-purple-900/30"
                                      : "border-zinc-700"
                                  )}
                                >
                                  {resume.title}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-zinc-400">
                              You have no saved resumes. Upload a new one to
                              apply.
                            </p>
                          )}

                          {profileData.resumes.length > 0 && (
                            <div className="relative my-4">
                              <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-zinc-700" />
                              </div>
                              <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-zinc-900 px-2 text-zinc-400">
                                  Or upload a new one
                                </span>
                              </div>
                            </div>
                          )}

                          {resumeValue instanceof File ? (
                            <div
                              className={cn(
                                "flex items-center justify-between p-2 border rounded-md",
                                inputStyles
                              )}
                            >
                              <span className="truncate max-w-[200px] sm:max-w-xs">
                                {resumeValue.name}
                              </span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => field.onChange(undefined)}
                              >
                                <XIcon className="w-4 h-4" />
                              </Button>
                            </div>
                          ) : (
                            <FormControl>
                              <Input
                                type="file"
                                className={cn(
                                  "file:text-purple-400 file:font-semibold cursor-pointer",
                                  inputStyles
                                )}
                                accept=".pdf,.doc,.docx"
                                onChange={(e) =>
                                  field.onChange(
                                    e.target.files
                                      ? e.target.files[0]
                                      : undefined
                                  )
                                }
                              />
                            </FormControl>
                          )}
                        </div>
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {questions.map((question) => (
                <FormField
                  key={question.id}
                  control={form.control}
                  name={`answers.${question.id}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">
                        {question.text}
                        {question.isRequired && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </FormLabel>
                      <FormControl>
                        {(() => {
                          switch (question.type) {
                            case "TEXT":
                              return (
                                <Textarea
                                  className={inputStyles}
                                  {...field}
                                  value={field.value || ""}
                                />
                              );
                            case "NUMBER":
                              return (
                                <Input
                                  type="number"
                                  className={inputStyles}
                                  {...field}
                                  value={field.value || ""}
                                />
                              );
                            case "YES_NO":
                              return (
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex items-center space-x-4 pt-2"
                                >
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem
                                        value="Yes"
                                        className="border-zinc-600 text-purple-500"
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer text-white/80">
                                      Yes
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem
                                        value="No"
                                        className="border-zinc-600 text-purple-500"
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer text-white/80">
                                      No
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              );
                            case "MULTIPLE_CHOICE":
                              return (
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className={inputStyles}>
                                      <SelectValue placeholder="Select an answer" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-zinc-800 text-white border-zinc-700">
                                    {question.options.map((option) => (
                                      <SelectItem key={option} value={option}>
                                        {option}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              );
                            default:
                              return (
                                <Input
                                  type="text"
                                  className={inputStyles}
                                  {...field}
                                  value={field.value || ""}
                                />
                              );
                          }
                        })()}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}

              <Button
                type="submit"
                className="w-full mt-4 bg-purple-700 text-white hover:bg-purple-800 disabled:bg-purple-900/50 disabled:text-zinc-400"
                disabled={!form.formState.isValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ApplyButton;
