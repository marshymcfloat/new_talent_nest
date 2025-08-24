import { z } from 'zod';

import { JobTypeSchema } from '../../enums/JobType.schema';
import { JobClassSchema } from '../../enums/JobClass.schema';
// prettier-ignore
export const JobModelSchema = z.object({
    id: z.string(),
    company: z.string(),
    title: z.string(),
    location: z.string(),
    type: JobTypeSchema,
    salary: z.string(),
    JobClass: JobClassSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    JobApplication: z.array(z.unknown())
}).strict();

export type JobModelType = z.infer<typeof JobModelSchema>;
