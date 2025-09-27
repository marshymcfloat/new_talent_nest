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
    .instanceof(File)
    .refine((file) => file.size > 0, "Please upload a resume file.")
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_RESUME_TYPES.includes(file.type),
      ".pdf, .doc, and .docx files are accepted."
    );

  const idSchema = z.string().min(1, "Please select a saved resume.");

  // Dynamically build the 'answers' object schema
  const answersSchema = z.object(
    jobQuestions.reduce(
      (acc, { question, isRequired }) => {
        let fieldSchema: z.ZodTypeAny;

        // Define the base validator for each question type
        switch (question.type) {
          case "NUMBER":
            // Use coerce to automatically convert the string from the input to a number
            fieldSchema = z.coerce.number({
              invalid_type_error: "Please enter a valid number.",
            });
            break;
          case "YES_NO":
            fieldSchema = z.enum(["Yes", "No"]);
            break;
          case "MULTIPLE_CHOICE":
            // Ensure options exist before creating an enum
            if (question.options.length > 0) {
              fieldSchema = z.enum(question.options as [string, ...string[]]);
            } else {
              fieldSchema = z.string(); // Fallback for safety
            }
            break;
          default: // TEXT
            fieldSchema = z.string();
            break;
        }

        // If the question is required, add a non-empty check
        if (isRequired) {
          fieldSchema = fieldSchema.refine(
            (val) => val !== "" && val !== null && val !== undefined,
            {
              message: `This field is required.`,
            }
          );
        } else {
          // If not required, make it optional
          fieldSchema = fieldSchema.optional();
        }

        acc[question.id] = fieldSchema;
        return acc;
      },
      {} as Record<string, z.ZodTypeAny>
    )
  );

  return z.object({
    resume: z.union([fileSchema, idSchema], {
      errorMap: () => ({ message: "Please select or upload a resume." }),
    }),
    answers: answersSchema,
  });
};
