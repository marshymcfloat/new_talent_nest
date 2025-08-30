import { z } from 'zod';
import { EducationSelectObjectSchema } from './objects/EducationSelect.schema';
import { EducationCreateManyInputObjectSchema } from './objects/EducationCreateManyInput.schema';

export const EducationCreateManyAndReturnSchema = z.object({ select: EducationSelectObjectSchema.optional(), data: z.union([ EducationCreateManyInputObjectSchema, z.array(EducationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()