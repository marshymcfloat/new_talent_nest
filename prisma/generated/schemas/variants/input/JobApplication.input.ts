import { z } from 'zod';

import { ApplicationStatusSchema } from '../../enums/ApplicationStatus.schema';
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
    status: ApplicationStatusSchema,
    notes: z.string().optional().nullable(),
    isArchived: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type JobApplicationInputType = z.infer<typeof JobApplicationInputSchema>;
