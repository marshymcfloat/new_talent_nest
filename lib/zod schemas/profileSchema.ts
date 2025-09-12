import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) =>
  (currentYear - i).toString()
);

export const summarySchema = z.object({
  summary: z
    .string()
    .min(6, { message: "Summary should have at least 6 characters." })
    .max(500, { message: "summary should not exceed 500 characters." }),
});

export const languageSchema = z.object({
  language: z.string().optional(),
});

// --- REFACTORED addCareerSchema ---
export const addCareerSchema = z
  .object({
    title: z
      .string()
      .min(6, { message: "Job title must be at least 6 characters." })
      .max(100, { message: "Job title cannot exceed 100 characters." }),
    company: z
      .string()
      .min(1, { message: "Company name is required." })
      .max(50, { message: "Company name cannot exceed 50 characters." }),

    // --- Start Date Refactor ---
    dateStarted: z.preprocess(
      // Preprocess: Convert string from form data to a Date object
      (arg) => {
        if (typeof arg === "string" && arg.trim() !== "") {
          const date = new Date(arg);
          // Check if new Date() resulted in an "Invalid Date"
          return isNaN(date.getTime()) ? undefined : date;
        }
        return undefined; // If not a valid string or empty, pass undefined
      },
      // Validate as a Date object. Add an explicit error message for clarity.
      z.date({
        required_error: "A start date is required.",
        invalid_type_error: "Invalid start date format.", // This will catch "Invalid Date" from preprocess
      })
    ),

    // --- End Date Refactor ---
    dateEnded: z.preprocess(
      // Preprocess: Convert string from form data to a Date object, allow null/undefined
      (arg) => {
        if (typeof arg === "string" && arg.trim() !== "") {
          const date = new Date(arg);
          return isNaN(date.getTime()) ? undefined : date;
        }
        return undefined; // Allow undefined for optional, which will become null due to .nullable()
      },
      // Validate as a Date, allow null or undefined.
      z
        .date({
          invalid_type_error: "Invalid end date format.",
        })
        .nullable() // Allows null if preprocess returns undefined or form sends null/empty string
        .optional() // Explicitly marks it as optional
    ),

    description: z
      .string()
      .max(500, { message: "Description cannot exceed 500 characters." })
      .optional()
      .nullable(), // Allow null as well for empty descriptions
  })
  .superRefine((data, ctx) => {
    if (
      data.dateEnded &&
      data.dateStarted &&
      data.dateStarted > data.dateEnded
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "End date cannot be earlier than the start date.",
        path: ["dateEnded"],
      });
    }
  });

// --- REFACTORED addEducationSchema ---
export const addEducationSchema = z
  .object({
    course: z
      .string()
      .min(1, { message: "Course or qualification is required." })
      .max(100, { message: "This field should not exceed 100 characters." }),

    institution: z.string().min(1, { message: "Institution is required." }),

    isComplete: z.boolean(),

    expectedFinishMonth: z.string().optional(), // Keep as string for month name
    expectedFinishYear: z
      .enum([
        "",
        ...years,
        (currentYear + 1).toString(),
        (currentYear + 2).toString(),
      ])
      .optional(), // Allow currentYear + 1, +2 for future expected years

    // Ensure finishedYear is treated as a string, then converted to number later if needed
    finishedYear: z.enum(["", ...years]).optional(), // Keep as string for year selection

    highlights: z
      .string()
      .max(2000, { message: "Highlights should not exceed 2000 characters." })
      .optional()
      .nullable(), // Allow null for empty highlights
  })
  .superRefine((data, ctx) => {
    // Logic for conditional validation
    if (data.isComplete) {
      if (data.expectedFinishMonth || data.expectedFinishYear) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Cannot provide an expected finish date for a completed qualification.",
          path: ["expectedFinishYear"], // Or provide paths to both fields
        });
      }
      if (!data.finishedYear || data.finishedYear.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "A finished year is required for a completed qualification.",
          path: ["finishedYear"],
        });
      }
    } else {
      if (data.finishedYear) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Cannot provide a finished year for an incomplete qualification.",
          path: ["finishedYear"],
        });
      }
      if (!data.expectedFinishMonth || data.expectedFinishMonth.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "An expected finish month is required for an incomplete qualification.",
          path: ["expectedFinishMonth"],
        });
      }
      if (!data.expectedFinishYear || data.expectedFinishYear.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "An expected finish year is required for an incomplete qualification.",
          path: ["expectedFinishYear"],
        });
      }
    }
  });

export const addResumeSchema = z.object({
  name: z.string().min(3, { message: "Title must be at least 3 characters." }),
  resume: z
    // 1. Use `z.instanceof(File)` which is cleaner than `z.custom`.
    .instanceof(File, { message: "Please upload a valid file." })
    // 2. Make the schema `.optional()` so `undefined` is a valid type.
    // This resolves the TypeScript error in the component.
    .optional()
    // 3. Add a `.refine()` check to ensure the file is actually provided on submission.
    // This makes the field required for validation purposes.
    .refine((file) => file, "A resume file is required.")
    // 4. Subsequent refines should safely check if the file exists before accessing properties.
    .refine((file) => file && file.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`,
    })
    .refine((file) => file && ACCEPTED_RESUME_TYPES.includes(file.type), {
      message: "Only .pdf, .doc, and .docx files are accepted.",
    }),
});
