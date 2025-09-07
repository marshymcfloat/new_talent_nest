import { z } from 'zod';

import { ApplicationStatusSchema } from '../../enums/ApplicationStatus.schema';
// prettier-ignore
export const JobApplicationResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    jobId: z.string(),
    resumeId: z.string(),
    resume: z.unknown(),
    Job: z.unknown(),
    User: z.unknown(),
    answers: z.array(z.unknown()),
    status: ApplicationStatusSchema,
    notes: z.string().nullable(),
    isArchived: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type JobApplicationResultType = z.infer<typeof JobApplicationResultSchema>;
