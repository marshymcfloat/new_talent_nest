"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { toast } from "sonner";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Popover, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, Loader2 } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "./ui/calendar";
import { Textarea } from "./ui/textarea";
import { format } from "date-fns";
import { z } from "zod";
import { CareerHistory } from "@prisma/client";
import { addCareerSchema } from "@/lib/zod schemas/profileSchema";
import {
  AddUserCareerHistory,
  updateUserCareerHistory,
} from "@/lib/actions/profileActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { CareerCardProps } from "./CareerCard";
import { useEffect } from "react";

type CareerFormValue = z.infer<typeof addCareerSchema>;

type ProfileData = {
  id: string;
  previousCareers: CareerHistory[];
};

type UpdateCareerVariables = {
  formData: FormData;
  id: string;
};

const AddRoleForm = ({
  onCancel,
  data,
}: {
  onCancel: () => void;
  data?: CareerCardProps | null;
}) => {
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

  useEffect(() => {
    if (data) {
      form.reset({
        title: data.title,
        company: data.company,
        description: data.description || "",
        dateStarted: new Date(data.dateStarted),
        dateEnded: data.dateEnded ? new Date(data.dateEnded) : undefined,
      });
    }
  }, [data, form.reset]);

  const { mutate: mutateAdd, isPending: pendingAdd } = useMutation({
    mutationFn: AddUserCareerHistory,
    onMutate: async (newCareerFormData: FormData) => {
      onCancel();

      await queryClient.cancelQueries({ queryKey: ["profile"] });

      const previousProfile = queryClient.getQueryData<ProfileData>([
        "profile",
      ]);

      queryClient.setQueryData<ProfileData | undefined>(["profile"], (old) => {
        if (!old) return undefined;
        const tempCareer: CareerHistory = {
          id: `temp-${Date.now()}`,
          userId: old.id,
          createdAt: new Date(),
          updatedAt: new Date(),
          title: newCareerFormData.get("title") as string,
          company: newCareerFormData.get("company") as string,
          dateStarted: new Date(newCareerFormData.get("dateStarted") as string),
          dateEnded: newCareerFormData.get("dateEnded")
            ? new Date(newCareerFormData.get("dateEnded") as string)
            : null,
          description: (newCareerFormData.get("description") as string) || null,
        };
        return {
          ...old,
          previousCareers: [...old.previousCareers, tempCareer],
        };
      });

      toast.success("New role added!");
      return { previousProfile };
    },
    onError: (err, newRole, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
      toast.error("Oops! Failed to save new role.", {
        description: err.message,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const { mutate: mutateUpdate, isPending: pendingUpdate } = useMutation({
    mutationFn: (variables: UpdateCareerVariables) =>
      updateUserCareerHistory(variables),
    onMutate: async ({ formData, id }: UpdateCareerVariables) => {
      onCancel();

      await queryClient.cancelQueries({ queryKey: ["profile"] });

      const previousProfile = queryClient.getQueryData<ProfileData>([
        "profile",
      ]);

      queryClient.setQueryData<ProfileData | undefined>(["profile"], (old) => {
        if (!old) return undefined;
        const updatedCareers = old.previousCareers.map((career) => {
          if (career.id === id) {
            return {
              ...career,
              title: formData.get("title") as string,
              company: formData.get("company") as string,
              dateStarted: new Date(formData.get("dateStarted") as string),
              dateEnded: formData.get("dateEnded")
                ? new Date(formData.get("dateEnded") as string)
                : null,
              description: (formData.get("description") as string) || null,
              updatedAt: new Date(),
            };
          }
          return career;
        });
        return {
          ...old,
          previousCareers: updatedCareers,
        };
      });

      toast.success("Role updated!");
      return { previousProfile };
    },
    onError: (err, variables, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
      toast.error("Oops! Failed to update role.", {
        description: err.message,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  function onSubmit(values: CareerFormValue) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("company", values.company);
    if (values.dateStarted) {
      formData.append("dateStarted", values.dateStarted.toISOString());
    }
    if (values.dateEnded) {
      formData.append("dateEnded", values.dateEnded.toISOString());
    }
    if (values.description) {
      formData.append("description", values.description);
    }

    if (data?.id) {
      mutateUpdate({ formData: formData, id: data.id });
    } else {
      mutateAdd(formData);
    }
  }

  const isPending = pendingAdd || pendingUpdate;

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
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddRoleForm;
