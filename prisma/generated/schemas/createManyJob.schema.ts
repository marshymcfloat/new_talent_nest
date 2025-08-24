import { z } from 'zod';
import { JobCreateManyInputObjectSchema } from './objects/JobCreateManyInput.schema';

export const JobCreateManySchema = z.object({ data: z.union([ JobCreateManyInputObjectSchema, z.array(JobCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })