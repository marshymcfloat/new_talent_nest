"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Resume } from "@prisma/client";
import { addResumeSchema } from "@/lib/zod schemas/profileSchema";
import { addUserResume, deleteUserResume } from "@/lib/actions/profileActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DeleteButton from "@/components/DeleteButton";
import { Eye, FileText, Loader2, PlusCircle, UploadCloud } from "lucide-react";

type ResumeFormValue = z.infer<typeof addResumeSchema>;
const ACCEPTED_RESUME_TYPES = ".pdf, .doc, .docx";

const ProfileResumeSection = ({
  initialResumes,
}: {
  initialResumes: Resume[];
}) => {
  const queryClient = useQueryClient();
  const [isAddingResume, setIsAddingResume] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | undefined>();
  const [resumePreview, setResumePreview] = useState<string | null>(null);

  const form = useForm<ResumeFormValue>({
    resolver: zodResolver(addResumeSchema),
    defaultValues: { name: "", resume: undefined },
  });

  useEffect(() => {
    if (!resumeFile) {
      setResumePreview(null);
      return;
    }
    const url = URL.createObjectURL(resumeFile);
    setResumePreview(url);
    return () => URL.revokeObjectURL(url);
  }, [resumeFile]);

  const { mutate: addResume, isPending: isAdding } = useMutation({
    mutationFn: addUserResume,
    onSuccess: () => {
      toast.success("Resume added!");
      queryClient.invalidateQueries({ queryKey: ["profileData"] });
      handleCancelAdd();
    },
    onError: (err) =>
      toast.error("Failed to add resume", { description: err.message }),
  });

  const { mutate: deleteResume, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserResume,
    onSuccess: () => {
      toast.success("Resume deleted!");
      queryClient.invalidateQueries({ queryKey: ["profileData"] });
    },
    onError: (err) =>
      toast.error("Failed to delete resume", { description: err.message }),
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setResumeFile(file);
    form.setValue("resume", file, { shouldValidate: true });
  };

  const handleCancelAdd = () => {
    setIsAddingResume(false);
    setResumeFile(undefined);
    form.reset();
  };

  const onSubmit = (values: ResumeFormValue) => {
    const formData = new FormData();
    formData.append("name", values.name);
    if (values.resume) formData.append("resume", values.resume);
    addResume(formData);
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-6 space-y-4">
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-2xl font-bold">Resumes</h2>
        {!isAddingResume && (
          <Button
            onClick={() => setIsAddingResume(true)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <PlusCircle size={16} /> Add New Resume
          </Button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {initialResumes.length > 0 ? (
          <div className="space-y-3">
            {initialResumes.map((resume) => (
              <motion.div
                key={resume.id}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <FileText className="text-purple-500" size={24} />
                  <span className="font-medium">{resume.title}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(resume.url, "_blank")}
                  >
                    <Eye className="h-5 w-5" />
                  </Button>
                  <DeleteButton
                    title={resume.title}
                    onDelete={() => deleteResume(resume.id)}
                    isPending={isDeleting}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          !isAddingResume && (
            <div className="text-center py-8 px-4 border-2 border-dashed rounded-lg">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold">No resume uploaded</h3>
              <p className="mt-1 text-sm text-gray-500">
                Upload your resume to apply for jobs quickly.
              </p>
              <div className="mt-6">
                <Button onClick={() => setIsAddingResume(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Your Resume
                </Button>
              </div>
            </div>
          )
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAddingResume && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-4 overflow-hidden"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resume Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Senior Developer Resume"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ fieldState }) => (
                    <FormItem>
                      <FormLabel>Resume File</FormLabel>
                      <FormControl>
                        <label className="relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                          <UploadCloud className="h-12 w-12 text-gray-400" />
                          <span className="mt-2 block text-sm font-medium">
                            <span className="text-purple-600">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </span>
                          <p className="mt-1 text-xs text-gray-500">
                            PDF, Word Document (MAX. 5MB)
                          </p>
                          <Input
                            id="resume-upload"
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0"
                            accept={ACCEPTED_RESUME_TYPES}
                            onChange={handleFileChange}
                          />
                        </label>
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-sm font-medium text-destructive mt-2">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                {resumePreview && (
                  <iframe
                    src={resumePreview}
                    title={resumeFile?.name}
                    className="w-full h-96 rounded-md border"
                  />
                )}
                <div className="flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleCancelAdd}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isAdding}>
                    {isAdding && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}{" "}
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileResumeSection;
