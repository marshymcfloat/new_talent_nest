import { z } from 'zod';

// prettier-ignore
export const JobApplicationModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    jobId: z.string(),
    Job: z.unknown(),
    User: z.unknown()
}).strict();

export type JobApplicationModelType = z.infer<typeof JobApplicationModelSchema>;
