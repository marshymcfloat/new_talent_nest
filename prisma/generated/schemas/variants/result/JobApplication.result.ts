import { z } from 'zod';

// prettier-ignore
export const JobApplicationResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    jobId: z.string(),
    Job: z.unknown(),
    User: z.unknown()
}).strict();

export type JobApplicationResultType = z.infer<typeof JobApplicationResultSchema>;
