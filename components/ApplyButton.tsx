"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
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
import { cn } from "@/lib/utils";

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
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

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

  const resumeFile = form.watch("resume");

  async function onSubmit(data: ApplicationFormValues) {
    const formData = new FormData();
    formData.append("jobId", jobId);
    formData.append("resume", data.resume);
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
                      Resume (PDF or DOCX){" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    {resumeFile ? (
                      <div
                        className={cn(
                          "flex items-center justify-between p-2 border rounded-md",
                          inputStyles
                        )}
                      >
                        <span className="truncate max-w-[200px]">
                          {resumeFile.name}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            form.setValue("resume", undefined, {
                              shouldValidate: true,
                            })
                          }
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
