import { z } from 'zod';

// prettier-ignore
export const JobApplicationInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    jobId: z.string(),
    Job: z.unknown(),
    User: z.unknown()
}).strict();

export type JobApplicationInputType = z.infer<typeof JobApplicationInputSchema>;
