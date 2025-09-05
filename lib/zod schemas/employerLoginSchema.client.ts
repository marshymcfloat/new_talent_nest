"use client";

import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// Schema for the Step 3 form on the client.
export const employerRegisterConfirmedCompanySchema = z.object({
  confirmFirstname: z.string().min(1, { message: "First name is required" }),
  confirmLastname: z.string().min(1, { message: "Last name is required" }),
  // It correctly validates a FileList for the browser's form.
  confirmUserLogo: z
    .instanceof(FileList)
    .refine((files) => files?.length === 1, "Profile picture is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
});

export type EmployerConfirmedCompanyValues = z.infer<
  typeof employerRegisterConfirmedCompanySchema
>;
