"use client";

import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const employerRegisterConfirmedCompanySchema = z.object({
  confirmFirstname: z.string().min(1, { message: "First name is required" }),
  confirmLastname: z.string().min(1, { message: "Last name is required" }),

  confirmUserLogo: z
    .instanceof(File, { message: "Profile picture is required." })
    .refine((file) => file.size > 0, "Profile picture is required.")
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
});

export type EmployerConfirmedCompanyValues = z.infer<
  typeof employerRegisterConfirmedCompanySchema
>;
