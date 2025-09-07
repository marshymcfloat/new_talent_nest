import { z } from 'zod';

import { JobTypeSchema } from '../../enums/JobType.schema';
import { JobClassSchema } from '../../enums/JobClass.schema';
import { JobStatusSchema } from '../../enums/JobStatus.schema';
// prettier-ignore
export const JobInputSchema = z.object({
    id: z.string(),
    companyId: z.string(),
    company: z.unknown(),
    title: z.string(),
    location: z.string(),
    type: JobTypeSchema,
    salary: z.string(),
    jobClass: JobClassSchema,
    status: JobStatusSchema,
    summary: z.string(),
    qualifications: z.string(),
    responsibilities: z.string(),
    benefits: z.string().optional().nullable(),
    employerQuestions: z.array(z.unknown()),
    tags: z.array(z.string()),
    JobApplication: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type JobInputType = z.infer<typeof JobInputSchema>;
