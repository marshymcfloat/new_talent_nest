import { z } from 'zod';

// prettier-ignore
export const JobApplicationInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    jobId: z.string(),
    resumeId: z.string(),
    resume: z.unknown(),
    Job: z.unknown(),
    User: z.unknown(),
    answers: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type JobApplicationInputType = z.infer<typeof JobApplicationInputSchema>;
