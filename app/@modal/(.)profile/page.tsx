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
import { CareerHistory, User } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import CareerCard from "@/components/CareerCard";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addCareerSchema } from "@/lib/zod schemas/profileSchema";
import { AddUserCareerHistory } from "@/lib/actions/profileActions";
import Spinner from "@/components/Spinner";

type SheetContentType = "addRole" | "editRole" | "addEducation" | null;
type CareerFormValue = z.infer<typeof addCareerSchema>;

const AddRoleForm = ({ onCancel }: { onCancel: () => void }) => {
  const queryClient = useQueryClient();

  const form = useForm<CareerFormValue>({
    resolver: zodResolver(addCareerSchema),
    defaultValues: {
      title: "",
      company: "",
      dateStarted: undefined,
      dateEnded: undefined,
      description: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: AddUserCareerHistory,
    onMutate: async (newCareerFormData: FormData) => {
      const newCareerObject = {
        title: newCareerFormData.get("title") as string,
        company: newCareerFormData.get("company") as string,
        dateStarted: new Date(newCareerFormData.get("dateStarted") as string),
        dateEnded: newCareerFormData.get("dateEnded")
          ? new Date(newCareerFormData.get("dateEnded") as string)
          : undefined,
        description: newCareerFormData.get("description") as string | undefined,
      };

      await queryClient.cancelQueries({ queryKey: ["profile"] });

      const previousProfile = queryClient.getQueryData(["profile"]);

      queryClient.setQueryData(["profile"], (old: any) => ({
        ...old,
        previousCareers: [
          ...(old.previousCareers || []),
          { ...newCareerObject, id: `temp-${Date.now()}` },
        ],
      }));

      return { previousProfile };
    },
    onError: (err, newRole, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
      toast.error("Failed to save role", { description: err.message });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      onCancel();
    },
  });

  function onSubmit(values: CareerFormValue) {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("company", values.company);
    formData.append("dateStarted", values.dateStarted.toISOString());
    if (values.dateEnded) {
      formData.append("dateEnded", values.dateEnded.toISOString());
    }
    if (values.description) {
      formData.append("description", values.description);
    }

    mutate(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Software Engineer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Google" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="dateStarted"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateEnded"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date (Optional)</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your role and accomplishments..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save Role</Button>
        </div>
      </form>
    </Form>
  );
};

const InterceptedProfilePage = () => {
  const router = useRouter();

  const [editingSummary, setEditingSummary] = useState(false);
  const [sheetContent, setSheetContent] = useState<SheetContentType>(null);

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`
      );

      if (!response.ok) {
        throw new Error("failed to fetch profile data");
      }

      const data = await response.json();

      return data.data as User & {
        summary?: string;
        previousCareers?: CareerHistory[];
      };
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
      default:
        return null;
    }
  };

  console.log(profileData);

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
              <h2 className="text-xl font-semibold">Personal Summary</h2>
              {profileData?.summary ? (
                <p>{profileData.summary}</p>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground">
                    {editingSummary
                      ? "Highlight your unique experiences, ambitions and strengths."
                      : "You haven't added a summary yet."}
                  </p>
                  {editingSummary && <Textarea />}
                  <Button
                    variant="outline"
                    onClick={() => setEditingSummary((prev) => !prev)}
                  >
                    {editingSummary ? "Save" : "Add Summary"}
                  </Button>
                </>
              )}
            </div>

            <div className="space-y-4">
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
                <Spinner className="m-4" />
              ) : (
                <p>no career history</p>
              )}
              <Button
                variant={"outline"}
                onClick={() => setSheetContent("addRole")}
              >
                Add Role
              </Button>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Education</h2>
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
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">{renderSheetContent()}</div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default InterceptedProfilePage;
