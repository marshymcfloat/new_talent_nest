import { z } from 'zod';

// prettier-ignore
export const JobApplicationModelSchema = z.object({
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

export type JobApplicationModelType = z.infer<typeof JobApplicationModelSchema>;
