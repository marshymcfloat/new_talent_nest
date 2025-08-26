import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(6, { message: "name should be at least 6 characters long" })
    .max(50, { message: "message should not exceed 50 characters" }),
  location: z.string(),
  resume: z.string(),
});
