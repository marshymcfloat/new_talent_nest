"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { X } from "lucide-react";
import { QuestionType } from "@prisma/client";

import { createEmployerQuestion } from "@/lib/actions/employerDashboardActions";
import {
  CreateQuestionValues,
  createQuestionSchema,
} from "@/lib/zod schemas/employerDashboardSchema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Spinner from "../Spinner";

const questionTypesArray = [
  { name: "Text", value: QuestionType.TEXT },
  { name: "Multiple Choice", value: QuestionType.MULTIPLE_CHOICE },
  { name: "Yes or No", value: QuestionType.YES_NO },
  { name: "Number", value: QuestionType.NUMBER },
];

interface CreateQuestionFormProps {
  onSuccess: () => void;
}

export const CreateQuestionForm = ({ onSuccess }: CreateQuestionFormProps) => {
  const form = useForm<CreateQuestionValues>({
    resolver: zodResolver(createQuestionSchema),
    defaultValues: {
      text: "",
      type: "TEXT",
      options: [],
    },
  });

  const questionType = form.watch("type");

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "options",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createEmployerQuestion,
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.message || "Question created successfully!");
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

  const onSubmit = (values: CreateQuestionValues) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Main grid for the 2-column layout on medium screens and up */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* --- LEFT COLUMN --- */}
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a question type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {questionTypesArray.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question Text</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. What is your expected salary?"
                      {...field}
                      rows={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div>
            {questionType === "MULTIPLE_CHOICE" && (
              <div className="space-y-4 rounded-md border p-4">
                <FormLabel>Options</FormLabel>
                <FormDescription>Add at least two options.</FormDescription>
                {fields.map((field, index) => (
                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`options.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={`Option ${index + 1}`}
                            />
                          </FormControl>
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            onClick={() => remove(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => append("")}
                >
                  Add Option
                </Button>
                {form.formState.errors.options &&
                  !form.formState.errors.options.root && (
                    <p className="text-sm font-medium text-destructive">
                      {form.formState.errors.options.message}
                    </p>
                  )}
              </div>
            )}
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
          Create Question
        </Button>
      </form>
    </Form>
  );
};
