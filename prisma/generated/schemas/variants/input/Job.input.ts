import { z } from 'zod';

import { JobTypeSchema } from '../../enums/JobType.schema';
import { JobClassSchema } from '../../enums/JobClass.schema';
// prettier-ignore
export const JobInputSchema = z.object({
    id: z.string(),
    company: z.string(),
    title: z.string(),
    location: z.string(),
    type: JobTypeSchema,
    salary: z.string(),
    jobClass: JobClassSchema,
    summary: z.string(),
    qualifications: z.string(),
    responsibilities: z.string(),
    benefits: z.string().optional().nullable(),
    employerQuestions: z.array(z.string()),
    tags: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    JobApplication: z.array(z.unknown())
}).strict();

export type JobInputType = z.infer<typeof JobInputSchema>;
