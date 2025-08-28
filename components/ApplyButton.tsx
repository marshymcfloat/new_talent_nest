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
import { toast } from "sonner"; // <-- IMPORT FROM SONNER

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

  // No more useToast hook here

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

    // Sonner's loading toast returns an ID
    const toastId = toast.loading("Submitting your application...");

    const response = await submitApplication(formData);

    if (response?.error) {
      // Update the toast with an error message
      toast.error("Submission Failed", {
        id: toastId,
        description: response.error,
      });
    } else {
      // Update the toast with a success message
      toast.success("Application submitted successfully!", {
        id: toastId,
        description: "The employer will be in touch if you're a good fit.",
      });
      form.reset();
      setIsSheetOpen(false); // Close the sheet on success
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

        <SheetContent className="p-4 bg-purple-300 overflow-y-auto w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Apply for {title}</SheetTitle>
            <SheetDescription>{summary}</SheetDescription>
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
                    <FormLabel>Resume (PDF or DOCX)</FormLabel>
                    {resumeFile ? (
                      <div className="flex items-center justify-between p-2 border rounded-md border-gray-500 bg-white text-black">
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
                          className="border-black"
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
                      <FormLabel>{question.text}</FormLabel>
                      <FormControl>
                        <Textarea className="border-black" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}

              <Button
                type="submit"
                className="w-full mt-4"
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
