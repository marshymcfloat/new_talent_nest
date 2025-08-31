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
import { useState } from "react";
import { CareerHistory, Education, User } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import CareerCard from "@/components/CareerCard";
import { z } from "zod";
import Spinner from "@/components/Spinner";
import AddRoleForm from "@/components/AddRoleForm";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addSumarrySchema } from "@/lib/zod schemas/profileSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { addUserSummary } from "@/lib/actions/profileActions";
import AddEducationForm from "@/components/AddEducationForm";
import EducationCard from "@/components/EducationCard";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
type SheetContentType = "addRole" | "editRole" | "addEducation" | null;

type ProfileData = User & {
  summary?: string;
  previousCareers: CareerHistory[];
  education: Education[];
};

type AddingSummaryValue = z.infer<typeof addSumarrySchema>;

const InterceptedProfilePage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [editingSummary, setEditingSummary] = useState(false);
  const [sheetContent, setSheetContent] = useState<SheetContentType>(null);

  const form = useForm<AddingSummaryValue>({
    resolver: zodResolver(addSumarrySchema),
    defaultValues: {
      summary: "",
    },
  });

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async (): Promise<ProfileData> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`
      );

      if (!response.ok) {
        throw new Error("failed to fetch profile data");
      }

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

  const { mutate, isPending } = useMutation({
    mutationKey: ["profile"],
    mutationFn: addUserSummary,
    onMutate: async (summaryFormData: FormData) => {
      await queryClient.cancelQueries({ queryKey: ["profile"] });

      const previousProfile = queryClient.getQueryData<ProfileData>([
        "profile",
      ]);

      const newSummary = summaryFormData.get("summary") as string;
      queryClient.setQueryData<ProfileData | undefined>(["profile"], (old) => {
        if (!old) return undefined;
        return {
          ...old,
          summary: newSummary,
        };
      });
      return { previousProfile };
    },
    onError: (err, _, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const onSubmit = async (value: AddingSummaryValue) => {
    const formData = new FormData();
    formData.append("summary", value.summary);
    mutate(formData);
    setEditingSummary(false);
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
            <div className="space-y-2">
              <Form {...form}>
                <form
                  action=""
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-2"
                >
                  <h2 className="text-xl font-semibold">Personal Summary</h2>
                  {profileData?.summary ? (
                    <p className="font-light">{profileData.summary}</p>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground">
                        {!profileData?.summary && !editingSummary
                          ? "You haven&apos;t added a summary yet."
                          : "Highlight your unique experiences, ambitions and strengths."}
                      </p>
                      {editingSummary && (
                        <>
                          <FormField
                            name="summary"
                            control={form.control}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Textarea {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          ></FormField>
                        </>
                      )}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          type="submit"
                          disabled={isPending}
                        >
                          {isPending && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          )}
                          Save
                        </Button>
                        {editingSummary && (
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={() => setEditingSummary(false)}
                          >
                            Cancel
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                </form>
              </Form>
            </div>

            <div className="space-y-4 flex flex-col">
              <h2 className="text-xl font-semibold">Career History</h2>
              {profileData?.previousCareers &&
              profileData?.previousCareers?.length > 0 ? (
                profileData?.previousCareers?.map((career: CareerHistory) => (
                  <CareerCard
                    company={career.company}
                    dateEnded={career.dateEnded}
                    dateStarted={career.dateStarted}
                    title={career.title}
                    key={career.id}
                  />
                ))
              ) : isLoading ? (
                <Spinner className="m-4 " />
              ) : (
                <p>no career history</p>
              )}
              <Button
                variant={"outline"}
                className="max-w-[120px] cursor-pointer"
                onClick={() => setSheetContent("addRole")}
              >
                Add Role
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Education History</h2>

              <div className="space-y-4 flex flex-col">
                {profileData && profileData.education?.length > 0 ? (
                  profileData.education.map(
                    ({ course, institution, isComplete, id, finishedYear }) => (
                      <EducationCard
                        key={id}
                        course={course}
                        institution={institution}
                        isComplete={isComplete}
                        finishedYear={finishedYear}
                      />
                    )
                  )
                ) : (
                  <Card className="flex justify-center items-center">
                    {isLoading ? (
                      <Spinner className="animate-spin " />
                    ) : (
                      <h1 className="font-bold">No Educational history</h1>
                    )}
                  </Card>
                )}
              </div>
              <Button
                className="max-w-[120px] cursor-pointer"
                variant={"outline"}
                onClick={() => setSheetContent("addEducation")}
              >
                Add Education
              </Button>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Languages</h2>
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
            <SheetTitle className="">{renderSheetTitle()}</SheetTitle>
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
