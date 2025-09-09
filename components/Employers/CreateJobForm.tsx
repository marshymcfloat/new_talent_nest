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
// --- CONSTANTS ---
const jobClassArray = Object.values(JobClass);
const jobTypeArray = Object.values(JobType);
const jobSalaryPeriodArray = Object.values(SalaryPeriod);
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
] as const;

interface CreateJobFormProps {
  onSuccess: () => void;
}

export const CreateJobForm = ({ onSuccess }: CreateJobFormProps) => {
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
      minSalary: undefined,
      maxSalary: undefined,
      currency: "PHP",
      payPeriod: SalaryPeriod.MONTHLY,
      questions: [],
      tags: [],
    },
  });

  const onSubmit = (values: CreateJobValues) => {
    console.log("Submitting Job Data:", values);
    toast.success("Job posting created successfully! (Simulation)");
    onSuccess();
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
                        {jobClassArray.map((c) => (
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
                        {jobTypeArray.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
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
                    <Input placeholder="e.g., Manila, Philippines" {...field} />
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
                        {jobSalaryPeriodArray.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
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
          <Button type="submit">Create Job Posting</Button>
        </div>
      </form>
    </FormProvider>
  );
};
