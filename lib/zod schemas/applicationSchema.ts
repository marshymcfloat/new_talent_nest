import { EmployerQuestion } from "@prisma/client";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const createApplicationSchema = (questions: EmployerQuestion[]) => {
  const fileSchema = z
    .instanceof(File, { message: "Please upload a resume file." })
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_RESUME_TYPES.includes(file.type),
      ".pdf, .doc, and .docx files are accepted."
    );

  const idSchema = z.string().min(1, "Please select a saved resume.");

  const schema = z.object({
    resume: z.union([fileSchema, idSchema], {
      message: "A resume is required. Please select one or upload a new file.",
    }),

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
