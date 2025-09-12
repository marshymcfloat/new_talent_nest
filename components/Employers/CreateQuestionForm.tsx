"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
    mode: "onTouched",
  });

  const questionType = form.watch("type");

  const [mcOptions, setMcOptions] = useState<string[]>(["", ""]);

  useEffect(() => {
    if (questionType === "MULTIPLE_CHOICE") {
      form.setValue("options", mcOptions, { shouldValidate: true });
    } else {
      form.setValue("options", [], { shouldValidate: true });
    }
  }, [mcOptions, questionType, form]);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...mcOptions];
    newOptions[index] = value;
    setMcOptions(newOptions);
  };

  const handleAddOption = () => {
    setMcOptions([...mcOptions, ""]);
  };

  const handleRemoveOption = (index: number) => {
    setMcOptions(mcOptions.filter((_, i) => i !== index));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createEmployerQuestion,
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.message || "Question created successfully!");
        form.reset();

        setMcOptions(["", ""]);
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
        <div className="space-y-4">
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
                    placeholder="e.g. Tell me about your most successful campaign."
                    {...field}
                    rows={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {questionType === "MULTIPLE_CHOICE" && (
            <div className="space-y-4 rounded-md border p-4">
              <FormLabel>Options</FormLabel>
              <FormDescription>
                Add at least two options for the applicant to choose from.
              </FormDescription>
              {mcOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveOption(index)}
                    disabled={mcOptions.length <= 2}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddOption}
              >
                Add Option
              </Button>
              {}
              {form.formState.errors.options && (
                <p className="text-sm font-medium text-destructive">
                  {form.formState.errors.options.message}
                </p>
              )}
            </div>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
          Create Question
        </Button>
      </form>
    </Form>
  );
};
