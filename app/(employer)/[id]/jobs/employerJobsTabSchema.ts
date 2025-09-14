import z from "zod";

import { createJobSchema } from "@/lib/zod schemas/employerDashboardSchema";
import { JobStatus } from "@prisma/client";

export const updateJobSchema = createJobSchema.extend({
  id: z.string(),
  status: z.nativeEnum(JobStatus).default("ACTIVE"),
});

export type UpdateJobValues = z.infer<typeof updateJobSchema>;
