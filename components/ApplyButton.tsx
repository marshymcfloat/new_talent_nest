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
import { XIcon } from "lucide-react";
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
import { EmployerQuestion } from "@prisma/client";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Resume } from "@prisma/client";
import { cn } from "@/lib/utils";

type UserWithResume = User & {
  resumes: Resume[];
  lastUsedResume: string | null;
};

const ApplyButton = ({
  title,
  questions,
  summary,
  jobId,
}: {
  jobId: string;
  title: string;
  summary: string;
  questions: EmployerQuestion[];
}) => {
  const { status } = useSession();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [profileData, setProfileData] = useState<UserWithResume | null>(null);
  const inputStyles =
    "bg-white border-purple-400 focus-visible:ring-purple-500 text-slate-800";

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

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`
      );

      if (!response.ok) {
        console.error("Error fetching profile info");
        return;
      }

      const data = await response.json();
      setProfileData(data.data);
    };

    if (isSheetOpen) {
      fetchUserData();
    }
  }, [isSheetOpen]);

  useEffect(() => {
    if (profileData?.lastUsedResume) {
      form.setValue("resume", profileData.lastUsedResume, {
        shouldValidate: true,
      });
    }
  }, [profileData, form]);

  const resumeValue = form.watch("resume");

  async function onSubmit(data: ApplicationFormValues) {
    const formData = new FormData();
    formData.append("jobId", jobId);

    if (typeof data.resume === "string") {
      formData.append("resumeId", data.resume);
    } else if (data.resume instanceof File) {
      formData.append("resume", data.resume);
    }

    formData.append("answers", JSON.stringify(data.answers));

    const toastId = toast.loading("Submitting your application...");

    const response = await submitApplication(formData);

    if (response?.error) {
      toast.error("Submission Failed", {
        id: toastId,
        description: response.error,
      });
    } else {
      toast.success("Application submitted successfully!", {
        id: toastId,
        description: "The employer will be in touch if you're a good fit.",
      });
      form.reset();
      setIsSheetOpen(false);
    }
  }

  return (
    <>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        {status === "unauthenticated" ? (
          <Button
            className="text-white rounded-md justify-center cursor-pointer flex items-center bg-purple-800 duration-150 transition-all hover:bg-purple-800/80 h-10 px-4 py-2 min-w-[120px]"
            onClick={() => signIn()}
          >
            Apply
          </Button>
        ) : (
          <SheetTrigger asChild>
            <Button className="text-white rounded-md justify-center cursor-pointer flex items-center bg-purple-800 duration-150 transition-all hover:bg-purple-800/80 h-10 px-4 py-2 min-w-[120px]">
              Apply
            </Button>
          </SheetTrigger>
        )}

        <SheetContent className="p-4 bg-purple-200 text-purple-950 overflow-y-auto w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="text-purple-950">
              Apply for {title}
            </SheetTitle>
            <SheetDescription className="text-purple-800">
              {summary}
            </SheetDescription>
          </SheetHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 space-y-6"
            >
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Resume <span className="text-red-500">*</span>
                    </FormLabel>

                    {profileData && profileData.resumes.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-purple-900/80">
                          Select a saved resume:
                        </p>
                        {profileData.resumes.map((resume) => (
                          <button
                            type="button"
                            key={resume.id}
                            onClick={() => field.onChange(resume.id)}
                            className={cn(
                              "w-full text-start p-2 hover:bg-purple-300 duration-150 transition-all cursor-pointer rounded-md border-2",
                              resumeValue === resume.id
                                ? "border-purple-600 bg-purple-300/50"
                                : "border-purple-400/40"
                            )}
                          >
                            {resume.title}
                          </button>
                        ))}
                      </div>
                    )}

                    {profileData && profileData.resumes.length > 0 && (
                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-purple-400/60" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-purple-200 px-2 text-purple-800">
                            Or
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
                        <span className="truncate max-w-[200px]">
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
                          className={cn("file:text-purple-800", inputStyles)}
                          accept=".pdf,.doc,.docx"
                          onChange={(e) =>
                            field.onChange(
                              e.target.files ? e.target.files[0] : undefined
                            )
                          }
                        />
                      </FormControl>
                    )}
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
                      <FormLabel>
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
                                        className="border-purple-400 text-purple-700"
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      Yes
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem
                                        value="No"
                                        className="border-purple-400 text-purple-700"
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
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
                                  <SelectContent>
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
                className="w-full mt-4 bg-purple-700 text-white hover:bg-purple-800 disabled:bg-purple-400"
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
              >
                {form.formState.isSubmitting
                  ? "Submitting..."
                  : "Submit Application"}
              </Button>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ApplyButton;
