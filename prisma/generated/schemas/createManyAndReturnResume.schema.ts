import { z } from 'zod';
import { ResumeSelectObjectSchema } from './objects/ResumeSelect.schema';
import { ResumeCreateManyInputObjectSchema } from './objects/ResumeCreateManyInput.schema';

export const ResumeCreateManyAndReturnSchema = z.object({ select: ResumeSelectObjectSchema.optional(), data: z.union([ ResumeCreateManyInputObjectSchema, z.array(ResumeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()