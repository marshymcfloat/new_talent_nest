import { z } from 'zod';
import { JobSelectObjectSchema } from './objects/JobSelect.schema';
import { JobCreateManyInputObjectSchema } from './objects/JobCreateManyInput.schema';

export const JobCreateManyAndReturnSchema = z.object({ select: JobSelectObjectSchema.optional(), data: z.union([ JobCreateManyInputObjectSchema, z.array(JobCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()