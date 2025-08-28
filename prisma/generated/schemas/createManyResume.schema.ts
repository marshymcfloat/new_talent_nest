import { z } from 'zod';
import { ResumeCreateManyInputObjectSchema } from './objects/ResumeCreateManyInput.schema';

export const ResumeCreateManySchema = z.object({ data: z.union([ ResumeCreateManyInputObjectSchema, z.array(ResumeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })