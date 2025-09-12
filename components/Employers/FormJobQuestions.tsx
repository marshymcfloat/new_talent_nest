"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { CompanyQuestion } from "@prisma/client";
import { toast } from "sonner";

import { getCompanyQuestions } from "@/lib/actions/employerDashboardActions";

import CreateJobButton from "./CreateJobButton";

import { CreateJobValues } from "@/lib/zod schemas/employerDashboardSchema";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { FormField, FormItem, FormLabel, FormControl } from "../ui/form";
import { Switch } from "../ui/switch";
import { Skeleton } from "../ui/skeleton";

export const FormJobQuestions = () => {
  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);
  const queryClient = useQueryClient();

  const { control } = useFormContext<CreateJobValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
    keyName: "customId",
  });

  const { data: questionBank, isLoading } = useQuery({
    queryKey: ["companyQuestions"],
    queryFn: async () => {
      const result = await getCompanyQuestions();
      if (result.error) {
        toast.error(result.error);
        return [];
      }
      return result.data || [];
    },
  });

  const selectedQuestionIds = new Set(fields.map((field) => field.questionId));

  const handleAddQuestion = (question: CompanyQuestion) => {
    append({
      questionId: question.id,

      isRequired: true,
    });
  };

  const onQuestionCreated = () => {
    queryClient.invalidateQueries({ queryKey: ["companyQuestions"] });
    setCreateDialogOpen(false);
  };

  const questionBankMap = new Map(questionBank?.map((q) => [q.id, q.text]));

  return (
    <div className="space-y-6">
      <Card className="">
        <CardHeader>
          <CardTitle>Questions for this Job</CardTitle>
        </CardHeader>
        <CardContent>
          {fields.length > 0 ? (
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div
                  key={field.customId}
                  className="flex items-center justify-between rounded-md border p-3"
                >
                  {}
                  <p className="flex-1 text-sm font-medium">
                    {questionBankMap.get(field.questionId) ||
                      "Loading question..."}
                  </p>
                  <div className="flex items-center gap-4">
                    <FormField
                      control={control}
                      name={`questions.${index}.isRequired`}
                      render={({ field }) => (
                        <FormItem className="flex items-center gap-2 space-y-0">
                          <FormLabel className="text-xs">Required</FormLabel>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => remove(index)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No questions added yet.
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Your Question Library</CardTitle>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setCreateDialogOpen(true)}
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Create New
          </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64">
            <div className="space-y-2">
              {isLoading &&
                Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              {questionBank?.map((question) => {
                const isSelected = selectedQuestionIds.has(question.id);
                return (
                  <div
                    key={question.id}
                    className="flex items-center justify-between rounded-md border p-2"
                  >
                    <p className="text-sm">{question.text}</p>
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      disabled={isSelected}
                      onClick={() => handleAddQuestion(question)}
                    >
                      {isSelected ? "Added" : "Add"}
                    </Button>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <CreateJobButton
        open={isCreateDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onSuccess={onQuestionCreated}
      />
    </div>
  );
};
