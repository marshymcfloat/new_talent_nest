"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createJobSchema,
  CreateJobValues,
} from "@/lib/zod schemas/employerDashboardSchema";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobClass, JobType, SalaryPeriod } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// --- CONSTANTS ---
const jobClassArray = Object.values(JobClass);
const jobTypeArray = Object.values(JobType);
const jobSalaryPeriodArray = Object.values(SalaryPeriod);
const availableCurrencies = ["PHP", "USD", "EUR"];
const textAreaFields = [
  {
    label: "summary",
    placeholder:
      "Write a brief overview of the role, including its purpose and impact within the company.",
  },
  {
    label: "responsibilities",
    placeholder:
      "List the main duties and tasks expected from this position (e.g., manage projects, collaborate with teams, etc.).",
  },
  {
    label: "qualifications",
    placeholder:
      "Specify the skills, experience, and education required or preferred for this role.",
  },
] as const;

// --- COMPONENT PROPS ---
interface CreateJobDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// --- COMPONENT DEFINITION ---
const CreateJobDialog = ({ open, onOpenChange }: CreateJobDialogProps) => {
  const form = useForm<CreateJobValues>({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      benefits: "",
      class: "IT",
      currency: "PHP",
      employerQuestions: "",
      location: "",
      maxSalary: 0,
      minSalary: 0,
      payPeriod: "MONTHLY",
      qualifications: "",
      responsibilities: "",
      status: "ACTIVE",
      summary: "",
      tags: [],
      title: "",
      type: "FULL_TIME",
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center capitalize">
            New Job Posting
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form action="" className="flex flex-col gap-4 px-1">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g; Software Engineer" />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="class"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Class</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {jobClassArray.map((jobClass) => (
                          <SelectItem value={jobClass} key={jobClass}>
                            {jobClass}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {jobTypeArray.map((jobType) => (
                          <SelectItem value={jobType} key={jobType}>
                            {jobType}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g; Quezon City, Metro Manila"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {textAreaFields.map((inputs) => (
              <FormField
                key={inputs.label}
                control={form.control}
                name={inputs.label}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{inputs.label}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={inputs.placeholder} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="minSalary"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Minimum Salary</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxSalary"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Maximum Salary</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Currency</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availableCurrencies.map((currency) => (
                          <SelectItem value={currency} key={currency}>
                            {currency}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="payPeriod"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Salary Period</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {jobSalaryPeriodArray.map((period) => (
                          <SelectItem value={period} key={period}>
                            {period}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="mt-8">
              <Button type="submit">Create Job</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobDialog;
