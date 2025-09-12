import { CompanyQuestion, QuestionsOnJobs } from "@prisma/client";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const createApplicationSchema = (
  jobQuestions: (QuestionsOnJobs & { question: CompanyQuestion })[]
) => {
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
    jobId: z.string().min(1, "Job ID is required."),
    answers: z.record(z.string(), z.string()),
  });

  return schema.superRefine((data, ctx) => {
    jobQuestions.forEach((jobQuestion) => {
      if (jobQuestion.isRequired) {
        const answer = data.answers[jobQuestion.questionId];

        if (!answer || answer.trim() === "") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `An answer for "${jobQuestion.question.text}" is required.`,
            path: ["answers", jobQuestion.questionId],
          });
        }

        if (jobQuestion.question.type === "NUMBER") {
          if (isNaN(Number(answer))) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `Answer for "${jobQuestion.question.text}" must be a number.`,
              path: ["answers", jobQuestion.questionId],
            });
          }
        }

        if (
          jobQuestion.question.type === "MULTIPLE_CHOICE" &&
          jobQuestion.question.options.length > 0
        ) {
          if (!jobQuestion.question.options.includes(answer)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `Answer for "${jobQuestion.question.text}" must be one of the provided options.`,
              path: ["answers", jobQuestion.questionId],
            });
          }
        }

        if (jobQuestion.question.type === "YES_NO") {
          if (!["yes", "no"].includes(answer.toLowerCase())) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `Answer for "${jobQuestion.question.text}" must be 'Yes' or 'No'.`,
              path: ["answers", jobQuestion.questionId],
            });
          }
        }
      }
    });
  });
};
