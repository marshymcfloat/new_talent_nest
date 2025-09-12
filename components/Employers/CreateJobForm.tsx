"use client";

import { useForm, FormProvider, UseFormReturn } from "react-hook-form";
import { JobClass, JobType, SalaryPeriod } from "@prisma/client";
import {
  createJobSchema,
  CreateJobValues,
} from "@/lib/zod schemas/employerDashboardSchema";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormJobQuestions } from "./FormJobQuestions";
import { useMutation } from "@tanstack/react-query";
import { createNewJob } from "@/lib/actions/employerDashboardActions";
import Spinner from "../Spinner";
const jobClassArray = [
  { title: "Accounting", value: JobClass.ACCOUNTING },
  { title: "Administration", value: JobClass.ADMINISTRATION },
  { title: "Construction", value: JobClass.CONSTRUCTION },
  { title: "Education", value: JobClass.EDUCATION },
  { title: "Engineering", value: JobClass.ENGINEERING },
  { title: "Finance", value: JobClass.FINANCE },
  { title: "Healthcare", value: JobClass.HEALTHCARE },
  { title: "Hospitality", value: JobClass.HOSPITALITY },
  { title: "Human Resources", value: JobClass.HUMAN_RESOURCES },
  { title: "IT", value: JobClass.IT },
  { title: "Legal", value: JobClass.LEGAL },
  { title: "Logistics", value: JobClass.LOGISTICS },
  { title: "Manufacturing", value: JobClass.MANUFACTURING },
  { title: "Marketing", value: JobClass.MARKETING },
  { title: "Media", value: JobClass.MEDIA },
  { title: "Operations", value: JobClass.OPERATIONS },
  { title: "Sales", value: JobClass.SALES },
  { title: "Science", value: JobClass.SCIENCE },
  { title: "Support", value: JobClass.SUPPORT },
  { title: "Telecommunications", value: JobClass.TELECOMMUNICATIONS },
  { title: "Transportation", value: JobClass.TRANSPORTATION },
  { title: "Other", value: JobClass.OTHER },
];

const jobTypeArray = [
  { title: "Full-time", value: JobType.FULL_TIME },
  { title: "Contractual", value: JobType.CONTRACT },
  { title: "Internship", value: JobType.INTERNSHIP },
  { title: "Part-time", value: JobType.PART_TIME },
];

const jobSalaryPeriodArray = [
  { title: "Monthly", value: SalaryPeriod.MONTHLY },
  { title: "Hourly", value: SalaryPeriod.HOURLY },
  { title: "Annually", value: SalaryPeriod.ANNUAL },
];
const availableCurrencies = ["PHP", "USD", "EUR"];
const textAreaFields = [
  {
    name: "summary",
    label: "Job Summary",
    placeholder: "A brief overview of the role...",
  },
  {
    name: "responsibilities",
    label: "Responsibilities",
    placeholder: "List the main duties...",
  },
  {
    name: "qualifications",
    label: "Qualifications",
    placeholder: "Specify the required skills...",
  },
  { name: "benefits", label: "Benefits", placeholder: "e.g; 13th month pay" },
] as const;

export const CreateJobForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const form: UseFormReturn<CreateJobValues> = useForm<CreateJobValues>({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      title: "",
      location: "",
      class: JobClass.IT,
      type: JobType.FULL_TIME,
      summary: "",
      qualifications: "",
      responsibilities: "",
      benefits: "",
      minSalary: 0,
      maxSalary: 0,
      currency: "PHP",
      payPeriod: SalaryPeriod.MONTHLY,
      questions: [],
      tags: [],
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createNewJob,
    onSuccess: async (data) => {
      if (data.success) {
        toast(data.message || "Question created successfully!");
        form.reset();
        onSuccess();
      } else {
        toast.error(data?.error || "An unexpected error occurred.");
      }
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create question.");
    },
  });

  const onSubmit = (values: CreateJobValues) => {
    mutate(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Senior Software Engineer"
                      {...field}
                      className="capitalize"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                name="class"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Class</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {jobClassArray.map((jobClass) => (
                          <SelectItem
                            key={jobClass.value}
                            value={jobClass.value}
                          >
                            {jobClass.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="type"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {jobTypeArray.map((jobType) => (
                          <SelectItem key={jobType.value} value={jobType.value}>
                            {jobType.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              name="location"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      className="capitalize"
                      placeholder="e.g., Manila, Philippines"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {textAreaFields.map((item) => (
              <FormField
                key={item.name}
                name={item.name}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={item.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <div className="flex gap-4">
              <FormField
                name="minSalary"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Min Salary (Optional)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="maxSalary"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Max Salary (Optional)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
              <FormField
                name="currency"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Currency</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availableCurrencies.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="payPeriod"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Pay Period</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {jobSalaryPeriodArray.map((period) => (
                          <SelectItem key={period.value} value={period.value}>
                            {period.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium">Screening Questions</h3>
            <FormJobQuestions />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            {" "}
            {isPending && <Spinner className="animate-spin" />}Create Job
            Posting
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
