// lib/zod schemas/applicationSchema.ts

import { EmployerQuestion } from "@prisma/client";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const createApplicationSchema = (questions: EmployerQuestion[]) => {
  const schema = z.object({
    resume: z
      .any()
      .refine(
        (file): file is File => file instanceof File,
        "Resume is required."
      )
      .refine(
        (file) => (file instanceof File ? file.size <= MAX_FILE_SIZE : true),
        `Max file size is 5MB.`
      )
      .refine(
        (file) =>
          file instanceof File
            ? ACCEPTED_RESUME_TYPES.includes(file.type)
            : true,
        ".pdf, .doc, and .docx files are accepted."
      ),

    answers: z.record(z.string(), z.string()),
  });

  return schema.superRefine((data, ctx) => {
    questions.forEach((question) => {
      if (question.isRequired) {
        const answer = data.answers[question.id];

        if (!answer || answer.trim() === "") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `An answer for this question is required.`,
            path: ["answers", question.id],
          });
        }
      }
    });
  });
};
