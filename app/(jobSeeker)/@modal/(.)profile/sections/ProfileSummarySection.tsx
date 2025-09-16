"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { summarySchema } from "@/lib/zod schemas/profileSchema";
import { addUserSummary } from "@/lib/actions/profileActions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Pencil, Loader2, ClipboardSignature, PlusCircle } from "lucide-react";

const sectionFade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
};
const placeholderFade = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.3 },
};

type SummaryFormValue = z.infer<typeof summarySchema>;

const ProfileSummarySection = ({
  initialSummary,
}: {
  initialSummary: string | null | undefined;
}) => {
  const queryClient = useQueryClient();
  const [editingSummary, setEditingSummary] = useState(false);

  const form = useForm<SummaryFormValue>({
    resolver: zodResolver(summarySchema),
    defaultValues: { summary: initialSummary || "" },
  });

  const { mutate: mutateSummary, isPending } = useMutation({
    mutationFn: addUserSummary,
    onSuccess: () => {
      toast.success("Summary updated!");
      queryClient.invalidateQueries({ queryKey: ["profileData"] });
      setEditingSummary(false);
    },
    onError: (err) =>
      toast.error("Failed to update summary", { description: err.message }),
  });

  const handleSubmission = (values: SummaryFormValue) => {
    const formData = new FormData();
    formData.append("summary", values.summary);
    mutateSummary(formData);
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmission)}>
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Personal Summary
            </h2>
            {!editingSummary && initialSummary && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setEditingSummary(true)}
                aria-label="Edit Summary"
              >
                <Pencil className="h-5 w-5 text-gray-500" />
              </Button>
            )}
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              {editingSummary ? (
                <motion.div
                  key="editing"
                  {...sectionFade}
                  className="space-y-4"
                >
                  <FormField
                    name="summary"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            placeholder="e.g., A highly motivated professional..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-3 pt-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setEditingSummary(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isPending}>
                      {isPending && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}{" "}
                      Save
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="display" {...sectionFade}>
                  {initialSummary ? (
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                      {initialSummary}
                    </p>
                  ) : (
                    <motion.div
                      key="placeholder"
                      {...placeholderFade}
                      className="text-center py-8 px-4 border-2 border-dashed rounded-lg"
                    >
                      <ClipboardSignature className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-semibold">
                        Add a personal summary
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        This is your chance to stand out.
                      </p>
                      <div className="mt-6">
                        <Button
                          type="button"
                          onClick={() => setEditingSummary(true)}
                        >
                          <PlusCircle className="mr-2 h-4 w-4" /> Add Summary
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileSummarySection;
